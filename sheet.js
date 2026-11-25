(() => {
    const roadmap = [
        ["Beginner Problems", [/basic|beginner|fundamental|number properties|arithmetic|implementation|loop|counting|simulation|pattern revision/i]],
        ["Sorting", [/sorting|sort(ing)? algorithm/i]],
        ["Arrays", [/array|subarray|prefix sum|kadane|matrix/i]],
        ["Hashing", [/hash|frequency count/i]],
        ["Binary Search", [/binary search|lower bound|upper bound|search on answer/i]],
        ["Strings (Basic and Medium)", [/string|palindrome|anagram/i]],
        ["Recursion", [/recursion|backtracking|permutation|subsets|n.?queens/i]],
        ["Linked-List", [/linked.?list/i]],
        ["Bit Manipulation", [/bitwise|bit manipulation|bitmask|xor|bit counting/i]],
        ["Greedy Algorithms", [/greedy|intervals|activity selection/i]],
        ["Sliding Window / 2 Pointer", [/sliding window|two pointer|2 pointer/i]],
        ["Stack / Queues", [/stack|queue|monotonic/i]],
        ["Binary Trees", [/tree|traversal|bfs|dfs|binary tree/i]],
        ["Binary Search Trees", [/binary search tree|\bbst\b/i]],
        ["Heaps", [/heap|priority queue|top k/i]],
        ["Graphs", [/graph|dijkstra|topological|shortest path|mst|scc|dsu|flow/i]],
        ["Dynamic Programming", [/dynamic programming|\bdp\b|knapsack|lis|subsequence/i]],
        ["Tries", [/trie/i]],
        ["Strings (Advanced Algo)", [/kmp|z algorithm|rabin.?karp|suffix|string matching|rolling hash/i]],
        ["Maths", [/math|gcd|lcm|prime|modulo|divisib|number theory/i]]
    ].map(([name, patterns]) => ({ name, patterns }));

    const startDate = new Date(2026, 10, 15);
    const questionsPerDay = 3;
    const dayMilliseconds = 24 * 60 * 60 * 1000;
    let selectedModule = roadmap[0].name;
    let viewMode = "day";
    let selectedDay = 1;
    let allQuestions = [];

    const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
    const getProgress = () => JSON.parse(localStorage.getItem("dsaTrackerProgress") || "{}");
    const questionKey = (day, index) => `${day}-${index}`;
    const dateForDay = day => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + Number(day) - 1);
        return date;
    };
    const shortDateForDay = day => dateForDay(day).toLocaleDateString("en-IN", { day: "numeric", month: "short" });
    const longDateForDay = day => dateForDay(day).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

    function topicFor(question, day) {
        const description = question.description || "";
        const tag = description.includes("|") ? description.split("|").slice(1).join(" ").trim() : description;
        const source = `${tag} ${question.title || ""}`;
        if (Number(day) <= 20) return "Beginner Problems";
        if (/binary search tree|\bbst\b/i.test(source)) return "Binary Search Trees";
        if (/kmp|z algorithm|rabin.?karp|suffix array|string matching|rolling hash/i.test(source)) return "Strings (Advanced Algo)";
        if (/dynamic programming|\bdp\b|knapsack|\blis\b|bitmask dp|tree dp/i.test(source)) return "Dynamic Programming";
        if (/\bgraph|dijkstra|topological|shortest path|mst|scc|dsu|flow algorithm/i.test(source)) return "Graphs";
        if (/binary tree|tree traversal|tree design|tree path|\btrees?\b/i.test(source)) return "Binary Trees";
        const match = roadmap.find(module => module.patterns.some(pattern => pattern.test(source)));
        return match?.name || "Arrays";
    }

    function flattenQuestions() {
        allQuestions = Object.entries(questionsData).flatMap(([day, list]) => list.map((question, index) => ({
            ...question,
            day: Number(day),
            index,
            topic: topicFor(question, day),
            difficulty: (question.description || "").match(/\b(Easy|Medium|Hard)\b/i)?.[1]?.toLowerCase() || "unknown"
        }))).sort((a, b) => a.day - b.day || a.index - b.index);
    }

    function isSolved(question, progress = getProgress()) {
        return progress[question.day]?.[question.index] === true;
    }

    function renderSummary() {
        const progress = getProgress();
        const solved = allQuestions.reduce((count, question) => count + Number(isSolved(question, progress)), 0);
        const percent = allQuestions.length ? Math.round(solved / allQuestions.length * 100) : 0;
        document.getElementById("sheet-solved-count").textContent = solved.toLocaleString();
        document.getElementById("sheet-total-count").textContent = allQuestions.length.toLocaleString();
        document.getElementById("sheet-progress-label").textContent = `${percent}% complete`;
        document.getElementById("sheet-remaining-label").textContent = `${(allQuestions.length - solved).toLocaleString()} questions left`;
        document.getElementById("sheet-progress-fill").style.width = `${percent}%`;
        const analysisTitle = document.getElementById("analysis-progress-title");
        const analysisCopy = document.getElementById("analysis-progress-copy");
        if (analysisTitle) analysisTitle.textContent = `${solved.toLocaleString()} questions completed`;
        if (analysisCopy) analysisCopy.textContent = `${percent}% of your ${allQuestions.length.toLocaleString()} saved questions are marked complete.`;
        renderPace(solved);
        renderMiniChart(progress);
    }

    function renderPace(solved) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const rawDay = Math.floor((today.getTime() - startDate.getTime()) / dayMilliseconds) + 1;
        const scheduledDay = Math.max(0, Math.min(703, rawDay));
        const plannedByToday = Math.min(allQuestions.length, scheduledDay * questionsPerDay);
        const dueBeforeToday = Math.min(allQuestions.length, Math.max(0, scheduledDay - 1) * questionsPerDay);
        let message = "You’re on track with your goal";
        let badge = "On track";
        let state = "steady";
        if (solved < dueBeforeToday) {
            const daysBehind = Math.ceil((dueBeforeToday - solved) / questionsPerDay);
            message = `You’re ${daysBehind} ${daysBehind === 1 ? "day" : "days"} behind your goal`;
            badge = `${daysBehind} ${daysBehind === 1 ? "day" : "days"} behind`;
            state = "behind";
        } else if (solved - plannedByToday >= questionsPerDay) {
            const daysAhead = Math.floor((solved - plannedByToday) / questionsPerDay);
            message = `You’re ${daysAhead} ${daysAhead === 1 ? "day" : "days"} ahead of your goal`;
            badge = `${daysAhead} ${daysAhead === 1 ? "day" : "days"} ahead`;
            state = "ahead";
        }
        const icon = document.getElementById("pace-state-icon");
        icon.className = `pace-state-icon ${state}`;
        icon.textContent = state === "ahead" ? "↗" : state === "behind" ? "↘" : "✓";
        document.getElementById("pace-message").textContent = message;
        document.getElementById("pace-badge").textContent = badge;
        document.getElementById("pace-day-label").textContent = scheduledDay ? `Day ${scheduledDay} · ${shortDateForDay(scheduledDay)}` : "Starts 15 Nov 2026";
        document.getElementById("pace-start-date").textContent = `Started ${longDateForDay(1)}`;
        document.getElementById("pace-detail").textContent = scheduledDay
            ? `${solved} solved · ${plannedByToday} planned by today · ${questionsPerDay} questions per day`
            : `Your plan begins ${longDateForDay(1)} · ${questionsPerDay} questions per day`;
        document.getElementById("pace-progress-copy").textContent = `${solved.toLocaleString()} solved · ${Math.max(0, plannedByToday - solved)} to today’s pace`;
        document.getElementById("pace-progress-fill").style.width = `${plannedByToday ? Math.min(100, solved / plannedByToday * 100) : solved ? 100 : 0}%`;
        if (typeof window.refreshDsaInsights === "function") window.refreshDsaInsights();
    }

    function renderMiniChart(progress) {
        const chart = document.getElementById("analysis-chart");
        if (!chart) return;
        const currentDay = Math.max(1, Math.min(703, Math.floor((new Date().setHours(0, 0, 0, 0) - startDate.getTime()) / 86400000) + 1));
        const values = Array.from({ length: 12 }, (_, week) => {
            let count = 0;
            for (let day = Math.max(1, currentDay - (11 - week) * 7 - 6); day <= currentDay - (11 - week) * 7; day++) count += (progress[day] || []).filter(Boolean).length;
            return count;
        });
        const max = Math.max(1, ...values);
        chart.innerHTML = values.map((value, index) => `<span title="Week ${index + 1}: ${value} solved" style="height:${value ? Math.max(5, Math.round(value / max * 100)) : 0}%"></span>`).join("");
    }

    function renderModules() {
        const list = document.getElementById("module-list");
        const progress = getProgress();
        if (viewMode === "day") {
            const days = [...new Set(allQuestions.map(question => question.day))];
            document.querySelector(".module-sidebar-title span:first-child").textContent = "DAYS";
            document.getElementById("module-count").textContent = `${days.length} days`;
            list.innerHTML = days.map(day => {
                const questions = allQuestions.filter(question => question.day === day);
                const solved = questions.filter(question => isSolved(question, progress)).length;
                const topic = questions[0]?.topic || "DSA Practice";
                return `<button class="module-link ${selectedDay === day ? "active" : ""}" data-day="${day}"><span class="module-number">${String(day).padStart(2, "0")}</span><span class="module-name">${shortDateForDay(day)} · ${escapeHtml(topic)}</span><span class="module-progress">${solved}/${questions.length}</span></button>`;
            }).join("");
            list.querySelectorAll(".module-link").forEach(button => button.addEventListener("click", () => {
                selectedDay = Number(button.dataset.day);
                document.getElementById("problem-search").value = "";
                document.getElementById("difficulty-filter").value = "all";
                renderModules();
                renderTopic();
            }));
            return;
        }
        document.querySelector(".module-sidebar-title span:first-child").textContent = "TOPICS";
        const counts = Object.fromEntries(roadmap.map(module => [module.name, { total: 0, solved: 0 }]));
        allQuestions.forEach(question => {
            counts[question.topic].total++;
            if (isSolved(question, progress)) counts[question.topic].solved++;
        });
        document.getElementById("module-count").textContent = `${roadmap.length} topics`;
        list.innerHTML = roadmap.map((module, index) => {
            const count = counts[module.name];
            return `<button class="module-link ${selectedModule === module.name ? "active" : ""}" data-module="${escapeHtml(module.name)}"><span class="module-number">${String(index + 1).padStart(2, "0")}</span><span class="module-name">${escapeHtml(module.name)}</span><span class="module-progress">${count.solved}/${count.total}</span></button>`;
        }).join("");
        list.querySelectorAll(".module-link").forEach(button => button.addEventListener("click", () => {
            selectedModule = button.dataset.module;
            document.getElementById("problem-search").value = "";
            document.getElementById("difficulty-filter").value = "all";
            renderModules();
            renderTopic();
        }));
    }

    function getCurrentQuestions() {
        const query = document.getElementById("problem-search").value.trim().toLowerCase();
        const difficulty = document.getElementById("difficulty-filter").value.toLowerCase();
        return allQuestions.filter(question => {
            const matchesModule = query ? true : viewMode === "day" ? question.day === selectedDay : question.topic === selectedModule;
            const matchesQuery = !query || `${question.title} ${question.description || ""} ${question.platform} ${question.topic} day ${question.day}`.toLowerCase().includes(query);
            const matchesDifficulty = difficulty === "all" || question.difficulty === difficulty.toLowerCase();
            return matchesModule && matchesQuery && matchesDifficulty;
        });
    }

    function renderTopic() {
        const holder = document.getElementById("topic-content");
        const questions = getCurrentQuestions();
        const heading = document.getElementById("problem-search").value.trim() ? "Search results" : viewMode === "day" ? `Day ${selectedDay} · ${shortDateForDay(selectedDay)} · ${allQuestions.find(question => question.day === selectedDay)?.topic || "DSA Practice"}` : selectedModule;
        const solvedCount = questions.filter(question => isSolved(question)).length;
        holder.innerHTML = `<div class="topic-heading"><div><span class="topic-overline">${document.getElementById("problem-search").value.trim() ? "FILTERED QUESTIONS" : viewMode === "day" ? "DAILY PRACTICE" : "TOPIC MODULE"}</span><h3>${escapeHtml(heading)}</h3><p>${solvedCount} of ${questions.length} complete</p></div><span class="topic-count-badge">${questions.length} questions</span></div>` + (questions.length ? `<div class="problem-table"><div class="problem-table-head"><span>STATUS</span><span>QUESTION</span><span>DIFFICULTY</span><span>${viewMode === "day" ? "DATE" : "DAY / DATE"}</span><span>PRACTICE</span></div>${questions.map(question => {
            const solved = isSolved(question);
            const difficulty = question.difficulty === "unknown" ? "—" : question.difficulty[0].toUpperCase() + question.difficulty.slice(1);
            const dayOrDate = viewMode === "day" ? shortDateForDay(question.day) : `D${question.day} · ${shortDateForDay(question.day)}`;
            return `<div class="problem-row ${solved ? "is-solved" : ""}"><label class="solve-check" title="Mark question ${solved ? "incomplete" : "complete"}"><input type="checkbox" data-day="${question.day}" data-index="${question.index}" ${solved ? "checked" : ""}><span></span></label><div class="problem-title-cell"><strong>${escapeHtml(question.title)}</strong><small>${escapeHtml(question.platform || "Practice")} · ${escapeHtml(question.topic)}</small></div><span class="difficulty-badge difficulty-${question.difficulty}">${difficulty}</span><span class="problem-day">${dayOrDate}</span><a class="solve-link" href="${escapeHtml(question.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(question.title)}">↗</a></div>`;
        }).join("")}</div>` : `<div class="no-results"><span>⌕</span><strong>No questions match this filter.</strong><p>Try another search or choose a different difficulty.</p></div>`);
        holder.querySelectorAll(".solve-check input").forEach(input => input.addEventListener("change", () => {
            const progress = getProgress();
            const day = Number(input.dataset.day);
            const index = Number(input.dataset.index);
            if (!progress[day]) progress[day] = [];
            progress[day][index] = input.checked;
            localStorage.setItem("dsaTrackerProgress", JSON.stringify(progress));
            renderSummary();
            renderModules();
            renderTopic();
            renderToday();
        }));
    }

    function renderToday() {
        const card = document.getElementById("today-problem-card");
        const nextQuestion = allQuestions.find(question => !isSolved(question));
        const dashboardTitle = document.getElementById("dashboard-next-title");
        const dashboardMeta = document.getElementById("dashboard-next-platform");
        const dashboardKicker = document.getElementById("dashboard-next-kicker");
        if (!nextQuestion) {
            if (dashboardTitle) dashboardTitle.textContent = "All questions complete";
            if (dashboardMeta) dashboardMeta.textContent = "Your full roadmap is done. Revisit any topic.";
            if (dashboardKicker) dashboardKicker.textContent = "ROADMAP COMPLETE";
            card.innerHTML = `<span class="empty-icon">✓</span><div class="today-question-copy"><span class="topic-overline">ROADMAP COMPLETE</span><h3>You’ve solved every question in your sheet!</h3><p>Great work. You can revisit any topic from the full DSA sheet.</p></div><a class="button-primary" href="#problems">Review sheet <span>→</span></a>`;
            return;
        }
        if (dashboardTitle) dashboardTitle.textContent = nextQuestion.title;
        if (dashboardMeta) dashboardMeta.textContent = `Day ${nextQuestion.day} · ${nextQuestion.platform || "Practice"} · ${shortDateForDay(nextQuestion.day)}`;
        if (dashboardKicker) dashboardKicker.textContent = `NEXT QUESTION · DAY ${nextQuestion.day}`;
        card.innerHTML = `<span class="empty-icon">✦</span><div class="today-question-copy"><span class="topic-overline">NEXT UP · DAY ${nextQuestion.day} · ${longDateForDay(nextQuestion.day).toUpperCase()} · ${escapeHtml(nextQuestion.topic.toUpperCase())}</span><h3>${escapeHtml(nextQuestion.title)}</h3><p>${escapeHtml(nextQuestion.description || `${nextQuestion.platform} practice problem`)}</p></div><div class="today-actions"><a class="button-primary" href="${escapeHtml(nextQuestion.url)}" target="_blank" rel="noopener noreferrer">Solve next <span>↗</span></a><button class="mark-next-solved" type="button" data-day="${nextQuestion.day}" data-index="${nextQuestion.index}">Mark solved</button></div>`;
        card.querySelector(".mark-next-solved").addEventListener("click", event => {
            const dayProgress = getProgress();
            if (!dayProgress[nextQuestion.day]) dayProgress[nextQuestion.day] = [];
            dayProgress[nextQuestion.day][nextQuestion.index] = true;
            localStorage.setItem("dsaTrackerProgress", JSON.stringify(dayProgress));
            renderSummary();
            renderModules();
            renderTopic();
            renderToday();
        });
    }

    flattenQuestions();
    window.getDsaSheetQuestions = () => allQuestions.map(question => ({ ...question, solved: isSolved(question) }));
    window.getDsaSheetProgress = getProgress;
    const currentDay = Math.floor((new Date().setHours(0, 0, 0, 0) - startDate.getTime()) / 86400000) + 1;
    if (allQuestions.some(question => question.day === currentDay)) selectedDay = currentDay;
    renderSummary();
    renderModules();
    renderTopic();
    renderToday();
    document.getElementById("problem-search").addEventListener("input", renderTopic);
    document.getElementById("difficulty-filter").addEventListener("change", renderTopic);
    document.querySelectorAll(".view-tab").forEach(button => button.addEventListener("click", () => {
        viewMode = button.dataset.view;
        document.querySelectorAll(".view-tab").forEach(tab => {
            const active = tab === button;
            tab.classList.toggle("active", active);
            tab.setAttribute("aria-selected", String(active));
        });
        document.getElementById("problem-search").value = "";
        document.getElementById("difficulty-filter").value = "all";
        renderModules();
        renderTopic();
    }));
})();
