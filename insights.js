(() => {
    const PROFILE_KEY = "dsaUserProfile";
    const DEFAULT_PROFILE = {
        name: "Arpit Kumar",
        role: "DSA Candidate",
        language: "C++",
        leetcode: "",
        codeforces: "",
        gfg: "",
        hackerrank: ""
    };
    const START_DATE = new Date(2026, 10, 15);
    const DAY_MS = 86400000;
    const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

    function readProfile() {
        try { return { ...DEFAULT_PROFILE, ...JSON.parse(localStorage.getItem(PROFILE_KEY) || "{}") }; }
        catch { return { ...DEFAULT_PROFILE }; }
    }

    function initials(name) {
        return String(name).trim().split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase() || "A";
    }

    function profileLinks(profile) {
        const services = [
            ["leetcode", "LeetCode", handle => `https://leetcode.com/u/${encodeURIComponent(handle)}/`],
            ["codeforces", "Codeforces", handle => `https://codeforces.com/profile/${encodeURIComponent(handle)}`],
            ["gfg", "GeeksforGeeks", handle => `https://www.geeksforgeeks.org/user/${encodeURIComponent(handle)}/`],
            ["hackerrank", "HackerRank", handle => `https://www.hackerrank.com/profile/${encodeURIComponent(handle)}`]
        ];
        const active = services.filter(([key]) => profile[key]?.trim());
        const holder = document.getElementById("profile-links");
        if (!active.length) {
            holder.innerHTML = `<p>Add a username above to show your profile links here.</p>`;
            return;
        }
        holder.innerHTML = active.map(([key, name, url]) => `<a class="profile-link-chip" href="${url(profile[key].trim())}" target="_blank" rel="noopener noreferrer"><span>${name}</span><b>${escapeHtml(profile[key].trim())}</b><i>↗</i></a>`).join("");
    }

    function applyProfile(profile) {
        document.getElementById("profile-display-name").textContent = profile.name;
        document.getElementById("profile-display-role").textContent = `${profile.role} · Learning ${profile.language}`;
        document.querySelectorAll(".profile-initial, .side-profile .avatar").forEach(element => element.textContent = initials(profile.name));
        const navName = document.querySelector(".side-profile strong");
        if (navName) navName.textContent = profile.name;
        const welcomeHeading = document.querySelector(".welcome-copy h1");
        if (welcomeHeading?.firstChild) welcomeHeading.firstChild.nodeValue = `Welcome back, ${profile.name}`;
        const fields = {
            "profile-name": profile.name,
            "profile-role": profile.role,
            "profile-language": profile.language,
            "profile-leetcode": profile.leetcode,
            "profile-codeforces": profile.codeforces,
            "profile-gfg": profile.gfg,
            "profile-hackerrank": profile.hackerrank
        };
        Object.entries(fields).forEach(([id, value]) => {
            const field = document.getElementById(id);
            if (field) field.value = value;
        });
        profileLinks(profile);
    }

    function setupProfile() {
        const form = document.getElementById("profile-form");
        const profile = readProfile();
        applyProfile(profile);
        form.addEventListener("submit", event => {
            event.preventDefault();
            const next = {
                name: document.getElementById("profile-name").value.trim() || DEFAULT_PROFILE.name,
                role: document.getElementById("profile-role").value,
                language: document.getElementById("profile-language").value,
                leetcode: document.getElementById("profile-leetcode").value.trim(),
                codeforces: document.getElementById("profile-codeforces").value.trim(),
                gfg: document.getElementById("profile-gfg").value.trim(),
                hackerrank: document.getElementById("profile-hackerrank").value.trim()
            };
            localStorage.setItem(PROFILE_KEY, JSON.stringify(next));
            applyProfile(next);
            const message = document.getElementById("profile-save-message");
            message.textContent = "Profile saved.";
            window.setTimeout(() => { message.textContent = "Changes stay in this browser."; }, 2500);
        });
    }

    function getProgress() {
        try { return window.getDsaSheetProgress?.() || JSON.parse(localStorage.getItem("dsaTrackerProgress") || "{}"); }
        catch { return {}; }
    }

    function getQuestions() {
        return window.getDsaSheetQuestions?.() || [];
    }

    function currentDayNumber() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return Math.max(0, Math.floor((today.getTime() - START_DATE.getTime()) / DAY_MS) + 1);
    }

    function renderHeatmap(progress, questions) {
        const holder = document.getElementById("analysis-heatmap");
        const labels = document.getElementById("heatmap-month-labels");
        const todayDay = Math.min(703, currentDayNumber());
        const roadmapDays = Math.max(1, ...questions.map(question => question.day));
        const totalDays = Math.min(365, Math.max(todayDay, Math.min(roadmapDays, 365)));
        const startWeekday = START_DATE.getDay();
        const dailyCounts = new Map();
        questions.forEach(question => {
            if (question.solved) dailyCounts.set(question.day, (dailyCounts.get(question.day) || 0) + 1);
        });
        const cells = Array.from({ length: startWeekday }, () => `<span class="activity-cell heat-empty"></span>`);
        let activeDays = 0;
        for (let day = 1; day <= totalDays; day++) {
            const count = dailyCounts.get(day) || 0;
            if (count) activeDays++;
            const date = new Date(START_DATE);
            date.setDate(START_DATE.getDate() + day - 1);
            const level = count === 0 ? 0 : count === 1 ? 1 : count === 2 ? 2 : 3;
            cells.push(`<span class="activity-cell level-${level}" title="${date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}: ${count} solved"></span>`);
        }
        holder.innerHTML = cells.join("");
        document.getElementById("analysis-active-days").textContent = activeDays.toLocaleString();
        const months = [];
        for (let day = 1; day <= totalDays; day++) {
            const date = new Date(START_DATE);
            date.setDate(START_DATE.getDate() + day - 1);
            if (date.getDate() === 1 || day === 1) months.push({ day, label: date.toLocaleDateString("en-IN", { month: "short" }) });
        }
        labels.innerHTML = months.map(month => `<span style="grid-column:${Math.ceil((startWeekday + month.day) / 7)}">${month.label}</span>`).join("");
        return activeDays;
    }

    function renderStreak(progress, questions) {
        const today = Math.min(703, currentDayNumber());
        if (!today) return 0;
        const questionsByDay = new Map();
        questions.forEach(question => questionsByDay.set(question.day, (questionsByDay.get(question.day) || 0) + 1));
        let day = today;
        const todayTotal = questionsByDay.get(day) || 0;
        const todaySolved = (progress[day] || []).filter(Boolean).length;
        if (!todayTotal || todaySolved < todayTotal) day--;
        let streak = 0;
        while (day >= 1) {
            const total = questionsByDay.get(day) || 0;
            const solved = (progress[day] || []).filter(Boolean).length;
            if (!total || solved < total) break;
            streak++;
            day--;
        }
        return streak;
    }

    function renderTopicBars(questions) {
        const groups = new Map();
        questions.forEach(question => {
            const name = question.topic || "Other";
            const group = groups.get(name) || { total: 0, solved: 0 };
            group.total++;
            if (question.solved) group.solved++;
            groups.set(name, group);
        });
        const ordered = [...groups.entries()].sort((a, b) => (b[1].solved / b[1].total) - (a[1].solved / a[1].total) || b[1].total - a[1].total);
        document.getElementById("analysis-topics").innerHTML = ordered.map(([name, group]) => {
            const percent = Math.round(group.solved / group.total * 100);
            return `<div class="analysis-bar-row"><div class="analysis-bar-title"><span>${escapeHtml(name)}</span><b>${group.solved}/${group.total}</b></div><div class="analysis-track"><i style="width:${percent}%"></i></div></div>`;
        }).join("");
    }

    function renderDifficulty(questions) {
        const difficultyNames = ["easy", "medium", "hard", "unknown"];
        const labels = { easy: "Easy", medium: "Medium", hard: "Hard", unknown: "Unlabeled" };
        const container = document.getElementById("analysis-difficulty");
        container.innerHTML = difficultyNames.map(name => {
            const subset = questions.filter(question => question.difficulty === name);
            const solved = subset.filter(question => question.solved).length;
            const percent = subset.length ? Math.round(solved / subset.length * 100) : 0;
            return `<div class="difficulty-row"><span class="difficulty-badge difficulty-${name}">${labels[name]}</span><div class="difficulty-progress"><i class="bar-${name}" style="width:${percent}%"></i></div><strong>${solved}<small> / ${subset.length}</small></strong></div>`;
        }).join("");
    }

    function renderWeekly(progress) {
        const today = Math.max(1, Math.min(703, currentDayNumber()));
        const weeks = [];
        const oldestWeekIndex = Math.min(7, Math.floor((today - 1) / 7));
        for (let index = oldestWeekIndex; index >= 0; index--) {
            const endDay = today - index * 7;
            const startDay = Math.max(1, endDay - 6);
            let count = 0;
            for (let day = startDay; day <= endDay; day++) count += (progress[day] || []).filter(Boolean).length;
            weeks.push({ label: `Day ${startDay}–${endDay}`, count });
        }
        const max = Math.max(3 * 7, ...weeks.map(week => week.count));
        document.getElementById("analysis-weeks").innerHTML = weeks.map(week => `<div class="week-column"><div class="week-value">${week.count}</div><div class="week-column-track"><i style="height:${week.count ? Math.max(5, week.count / max * 100) : 0}%"></i></div><span>${week.label}</span></div>`).join("");
    }

    window.refreshDsaInsights = function() {
        const questions = getQuestions();
        const progress = getProgress();
        const solved = questions.filter(question => question.solved).length;
        const completion = questions.length ? Math.round(solved / questions.length * 100) : 0;
        const streak = renderStreak(progress, questions);
        document.getElementById("analysis-solved").textContent = solved.toLocaleString();
        document.getElementById("analysis-completion").textContent = `${completion}%`;
        document.getElementById("analysis-completion-caption").textContent = `${solved.toLocaleString()} of ${questions.length.toLocaleString()} questions`;
        document.getElementById("analysis-streak").textContent = `${streak} ${streak === 1 ? "day" : "days"}`;
        document.getElementById("analysis-streak-caption").textContent = streak ? "Consecutive fully completed days" : "Finish a day’s questions to start a streak";
        renderHeatmap(progress, questions);
        renderTopicBars(questions);
        renderDifficulty(questions);
        renderWeekly(progress);
    };

    setupProfile();
    window.refreshDsaInsights();
})();
