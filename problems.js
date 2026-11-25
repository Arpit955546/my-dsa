
/* =====================================
   DSA TRACKER - PROBLEMS.JS
   Day Search & Question Display
===================================== */

// =====================================
// TEMPORARY SAMPLE QUESTION DATA
// =====================================

const questionsData = {

    1: [
        {
            title: "Sum of Two Integers",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/add-two-integers/"
        },
        {
            title: "Watermelon",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/4/A"
        },
        {
            title: "Solve Me First",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/solve-me-first/problem"
        }
    ],

      // =====================================
    // DAY 2 — Number Properties
    // =====================================
    2: [
        {
            title: "Number of 1 Bits",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/number-of-1-bits/"
        },
        {
            title: "Team",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/231/A"
        },
        {
            title: "Simple Array Sum",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/simple-array-sum/problem"
        }
    ],

    // =====================================
    // DAY 3 — Basic Arithmetic
    // =====================================
    3: [
        {
            title: "Add Digits",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/add-digits/"
        },
        {
            title: "Next Round",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/158/A"
        },
        {
            title: "Compare the Triplets",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/compare-the-triplets/problem"
        }
    ],

    // =====================================
    // DAY 4 — Divisibility & Modulo
    // =====================================
    4: [
        {
            title: "Fizz Buzz",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/fizz-buzz/"
        },
        {
            title: "Divisibility Problem",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/1328/A"
        },
        {
            title: "A Very Big Sum",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/a-very-big-sum/problem"
        }
    ],

    // =====================================
    // DAY 5 — Number Reversal
    // =====================================
    5: [
        {
            title: "Palindrome Number",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/palindrome-number/"
        },
        {
            title: "Beautiful Matrix",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/263/A"
        },
        {
            title: "Find the Digits",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/find-digits/problem"
        }
    ],

    // =====================================
    // DAY 6 — GCD / LCM Basics
    // =====================================
    6: [
        {
            title: "Greatest Common Divisor of Strings",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/greatest-common-divisor-of-strings/"
        },
        {
            title: "Boy or Girl",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/236/A"
        },
        {
            title: "Sherlock and Divisors",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/sherlock-and-divisors/problem"
        }
    ],

    // =====================================
    // DAY 7 — Basic Implementation
    // =====================================
    7: [
        {
            title: "Power of Two",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/power-of-two/"
        },
        {
            title: "Bit++",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/282/A"
        },
        {
            title: "Staircase",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/staircase/problem"
        }
    ],

    // =====================================
    // DAY 8 — Counting
    // =====================================
    8: [
        {
            title: "Count the Digits That Divide a Number",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/count-the-digits-that-divide-a-number/"
        },
        {
            title: "Stones on the Table",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/266/A"
        },
        {
            title: "Birthday Cake Candles",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/birthday-cake-candles/problem"
        }
    ],

    // =====================================
    // DAY 9 — Basic Logic
    // =====================================
    9: [
        {
            title: "Excel Sheet Column Number",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/excel-sheet-column-number/"
        },
        {
            title: "Helpful Maths",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/339/A"
        },
        {
            title: "Angry Professor",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/angry-professor/problem"
        }
    ],

    // =====================================
    // DAY 10 — Pattern Revision
    // =====================================
    10: [
        {
            title: "Happy Number",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/happy-number/"
        },
        {
            title: "Magnets",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/344/A"
        },
        {
            title: "Viral Advertising",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/strange-advertising/problem"
        }
    ],
        // =====================================
    // DAY 11 — Loop Basics
    // =====================================
    11: [
        {
            title: "Counting Bits",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/counting-bits/"
        },
        {
            title: "Elephant",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/617/A"
        },
        {
            title: "Counting Valleys",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/counting-valleys/problem"
        }
    ],

    // =====================================
    // DAY 12 — Iteration & Conditions
    // =====================================
    12: [
        {
            title: "Number of Steps to Reduce a Number to Zero",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/"
        },
        {
            title: "Anton and Danik",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/734/A"
        },
        {
            title: "Utopian Tree",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/utopian-tree/problem"
        }
    ],

    // =====================================
    // DAY 13 — Repeated Operations
    // =====================================
    13: [
        {
            title: "Climbing Stairs",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/climbing-stairs/"
        },
        {
            title: "Tram",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/116/A"
        },
        {
            title: "Jumping on the Clouds",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem"
        }
    ],

    // =====================================
    // DAY 14 — Simulation
    // =====================================
    14: [
        {
            title: "Robot Return to Origin",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/robot-return-to-origin/"
        },
        {
            title: "Football",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/96/A"
        },
        {
            title: "Circular Array Rotation",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/circular-array-rotation/problem"
        }
    ],

    // =====================================
    // DAY 15 — Loop + Array
    // =====================================
    15: [
        {
            title: "Move Zeroes",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/move-zeroes/"
        },
        {
            title: "Drinks",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/200/B"
        },
        {
            title: "The Hurdle Race",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/the-hurdle-race/problem"
        }
    ],

    // =====================================
    // DAY 16 — Nested Loops Introduction
    // =====================================
    16: [
        {
            title: "Reshape the Matrix",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/reshape-the-matrix/"
        },
        {
            title: "Vanya and Fence",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/677/A"
        },
        {
            title: "Designer PDF Viewer",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/designer-pdf-viewer/problem"
        }
    ],

    // =====================================
    // DAY 17 — Mathematical Simulation
    // =====================================
    17: [
        {
            title: "Sqrt(x)",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/sqrtx/"
        },
        {
            title: "Anton and Letters",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/443/A"
        },
        {
            title: "Save the Prisoner!",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/save-the-prisoner/problem"
        }
    ],

    // =====================================
    // DAY 18 — Loop + String
    // =====================================
    18: [
        {
            title: "To Lower Case",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/to-lower-case/"
        },
        {
            title: "Word Capitalization",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/281/A"
        },
        {
            title: "Strong Password",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/strong-password/problem"
        }
    ],

    // =====================================
    // DAY 19 — Simulation + Greedy Basics
    // =====================================
    19: [
        {
            title: "Best Time to Buy and Sell Stock",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
        },
        {
            title: "Twins",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/160/A"
        },
        {
            title: "Cut the Sticks",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/cut-the-sticks/problem"
        }
    ],

    // =====================================
    // DAY 20 — Pattern Revision
    // =====================================
    20: [
        {
            title: "Pascal's Triangle",
            platform: "LeetCode",
            url: "https://leetcode.com/problems/pascals-triangle/"
        },
        {
            title: "Queue at the School",
            platform: "Codeforces",
            url: "https://codeforces.com/problemset/problem/266/B"
        },
        {
            title: "Equalize the Array",
            platform: "HackerRank",
            url: "https://www.hackerrank.com/challenges/equality-in-a-array/problem"
        }
    ],
    // ==================== DAY 21 ====================
// Array Traversal Basics
21: [
    {
        title: "Two Sum",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/two-sum/",
        description: "Find the indices of two numbers in an array whose sum equals the given target. Practice array traversal and hash map usage."
    },
    {
        title: "Build Array from Permutation",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/build-array-from-permutation/",
        description: "Construct a new array where each element is obtained by using the current array's values as indices. Practice array indexing."
    },
    {
        title: "Array",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/300/A",
        description: "Divide a given array of integers into groups based on their signs. Practice array traversal and rearrangement."
    }
],

// ==================== DAY 22 ====================
// Array In-Place Operations
22: [
    {
        title: "Remove Element",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/remove-element/",
        description: "Remove all occurrences of a given value from an array in-place and return the number of remaining elements. Practice two pointers."
    },
    {
        title: "Remove Duplicates from Sorted Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        description: "Remove duplicate elements from a sorted array in-place while keeping unique elements in order. Practice the two-pointer technique."
    },
    {
        title: "Move Zeroes",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/move-zeroes/",
        description: "Move all zeroes to the end of the array without changing the relative order of non-zero elements. Practice in-place rearrangement."
    }
],

// ==================== DAY 23 ====================
// Array Indexing
23: [
    {
        title: "Find Numbers with Even Number of Digits",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/",
        description: "Count how many numbers in an array contain an even number of digits. Practice digit counting and array traversal."
    },
    {
        title: "Missing Number",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/missing-number/",
        description: "Find the missing number from an array containing distinct numbers in the range 0 to n. Practice mathematical and XOR approaches."
    },
    {
        title: "Max Consecutive Ones",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/max-consecutive-ones/",
        description: "Find the maximum number of consecutive 1s in a binary array. Practice counting and maintaining a running maximum."
    }
],

// ==================== DAY 24 ====================
// Array Rotation
24: [
    {
        title: "Rotate Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/rotate-array/",
        description: "Rotate an array to the right by k positions. Practice array manipulation and the reversal technique."
    },
    {
        title: "Left Rotation",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/array-left-rotation/problem",
        description: "Rotate an array to the left by a specified number of positions. Practice indexing and modular arithmetic."
    },
    {
        title: "Circular Array Rotation",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/circular-array-rotation/problem",
        description: "Rotate an array circularly and answer queries about the elements at specified indices. Practice modular indexing."
    }
],

// ==================== DAY 25 ====================
// Array Rearrangement
25: [
    {
        title: "Sort Array By Parity",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/sort-array-by-parity/",
        description: "Rearrange an array so that all even numbers appear before odd numbers. Practice partitioning and two pointers."
    },
    {
        title: "Squares of a Sorted Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
        description: "Square every element of a sorted array and return the squared values in sorted order. Practice the two-pointer technique."
    },
    {
        title: "Rearrange Array Elements by Sign",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/rearrange-array-elements-by-sign/",
        description: "Rearrange positive and negative numbers alternately while preserving their relative order. Practice array placement."
    }
],

// ==================== DAY 26 ====================
// Maximum / Minimum in Array
26: [
    {
        title: "Find the Largest Element in an Array",
        platform: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1",
        description: "Find the largest element present in an array. Practice basic traversal and maintaining a maximum value."
    },
    {
        title: "Third Maximum Number",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/third-maximum-number/",
        description: "Find the third distinct maximum number in an array. If it does not exist, return the maximum. Practice tracking distinct values."
    },
    {
        title: "Minimum Operations to Make Array Increasing",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/",
        description: "Make an array strictly increasing using the minimum number of increment operations. Practice greedy traversal."
    }
],

// ==================== DAY 27 ====================
// Array Traversal with Conditions
27: [
    {
        title: "Find All Numbers Disappeared in an Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
        description: "Find all numbers from 1 to n that are missing in an array. Practice indexing, marking, and hash sets."
    },
    {
        title: "Find the Duplicate Number",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/find-the-duplicate-number/",
        description: "Find the repeated number in an array with specific constraints. Practice binary search or Floyd's cycle detection."
    },
    {
        title: "Majority Element",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/majority-element/",
        description: "Find the element that appears more than n/2 times in an array. Practice frequency counting and Boyer-Moore voting."
    }
],

// ==================== DAY 28 ====================
// Subarray Traversal Basics
28: [
    {
        title: "Maximum Subarray",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/maximum-subarray/",
        description: "Find the contiguous subarray with the largest sum. Practice Kadane's algorithm and dynamic programming."
    },
    {
        title: "Maximum Product Subarray",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/maximum-product-subarray/",
        description: "Find the contiguous subarray with the largest product. Practice tracking maximum and minimum products."
    },
    {
        title: "Subarray Sum Equals K",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/subarray-sum-equals-k/",
        description: "Count contiguous subarrays whose sum equals k. Practice prefix sums and hash maps."
    }
],

// ==================== DAY 29 ====================
// Merging Arrays
29: [
    {
        title: "Merge Sorted Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/merge-sorted-array/",
        description: "Merge two sorted arrays into one sorted array in-place. Practice backward traversal and two pointers."
    },
    {
        title: "Merge Two Sorted Lists",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/merge-two-sorted-lists/",
        description: "Merge two sorted linked lists into a single sorted linked list. Practice linked list traversal and pointer manipulation."
    },
    {
        title: "Intersection of Two Arrays",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/intersection-of-two-arrays/",
        description: "Find the unique elements common to two arrays. Practice hash sets and sorting."
    }
],

// ==================== DAY 30 ====================
// Array Pattern Revision
30: [
    {
        title: "Best Time to Buy and Sell Stock",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        description: "Find the maximum profit from one buy and one sell transaction. Practice greedy approach and tracking minimum prices."
    },
    {
        title: "Find Pivot Index",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/find-pivot-index/",
        description: "Find an index where the sum of elements on the left equals the sum on the right. Practice prefix sums."
    },
    {
        title: "Product of Array Except Self",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/product-of-array-except-self/",
        description: "Return an array where each element is the product of all other elements without using division. Practice prefix and suffix products."
    }
],
// ==================== DAY 31 ====================
// Minimum & Maximum
31: [
    {
        title: "Find the Minimum and Maximum Element in an Array",
        platform: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1",
        description: "Find both the smallest and largest elements in an array. Practice array traversal and maintaining minimum and maximum values."
    },
    {
        title: "Maximum Element",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset",
        description: "Practice identifying the maximum value in a collection of elements. Focus on comparisons and array traversal."
    },
    {
        title: "Largest Number At Least Twice of Others",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/largest-number-at-least-twice-of-others/",
        description: "Determine whether the largest element is at least twice as large as every other element. Practice finding the largest and second-largest values."
    }
],

// ==================== DAY 32 ====================
// Frequency Counting
32: [
    {
        title: "How Many Numbers Are Smaller Than the Current Number",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
        description: "For each element, count how many array elements are strictly smaller than it. Practice frequency counting and comparisons."
    },
    {
        title: "Boy or Girl",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/236/A",
        description: "Count the distinct characters in a username and determine the outcome based on whether the count is odd or even. Practice sets and frequency counting."
    },
    {
        title: "Majority Element",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/majority-element/",
        description: "Find the element that appears more than n/2 times. Practice frequency maps and Boyer-Moore voting."
    }
],

// ==================== DAY 33 ====================
// Duplicate Elements
33: [
    {
        title: "Contains Duplicate",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/contains-duplicate/",
        description: "Determine whether any value appears at least twice in an array. Practice hash sets and duplicate detection."
    },
    {
        title: "Duplicate Count",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset",
        description: "Practice identifying repeated elements and counting duplicates in a sequence. Focus on frequency counting."
    },
    {
        title: "Find All Duplicates in an Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
        description: "Find all values that occur twice in an array under given constraints. Practice index-based marking and frequency counting."
    }
],

// ==================== DAY 34 ====================
// Missing Elements
34: [
    {
        title: "Missing Number",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/missing-number/",
        description: "Find the missing number from a sequence containing values from 0 to n. Practice summation, XOR, and array traversal."
    },
    {
        title: "Permutation",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset",
        description: "Practice working with permutations, where elements appear in a specific rearranged order. Focus on indexing and element placement."
    },
    {
        title: "Find All Numbers Disappeared in an Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
        description: "Find all numbers from 1 to n that are missing from the array. Practice index marking and set-based approaches."
    }
],

// ==================== DAY 35 ====================
// Counting with Arrays
35: [
    {
        title: "Number of Good Pairs",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/number-of-good-pairs/",
        description: "Count pairs of indices where the corresponding elements are equal and the first index is smaller. Practice pair counting and frequency maps."
    },
    {
        title: "Helpful Maths",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/339/A",
        description: "Sort the numbers in a sum expression while preserving the required format. Practice sorting and string manipulation."
    },
    {
        title: "Unique Number of Occurrences",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/unique-number-of-occurrences/",
        description: "Check whether every distinct element has a unique frequency. Practice hash maps and sets."
    }
],

// ==================== DAY 36 ====================
// Frequency Array
36: [
    {
        title: "Relative Sort Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/relative-sort-array/",
        description: "Sort one array according to the order of elements in another array, then sort remaining values. Practice frequency arrays and custom sorting."
    },
    {
        title: "Presents",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/136/A",
        description: "Determine who gave a present to each person using the given mapping. Practice arrays and inverse indexing."
    },
    {
        title: "Counting Sort 1",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/counting-sort-1/problem",
        description: "Create a frequency array for integers in a limited range. Practice counting sort and frequency arrays."
    }
],

// ==================== DAY 37 ====================
// Most Frequent Element
37: [
    {
        title: "Majority Element",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/majority-element/",
        description: "Find the element occurring more than half the time. Practice frequency counting and the Boyer-Moore voting algorithm."
    },
    {
        title: "Football",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/43/A",
        description: "Determine which football team scored more goals based on the match entries. Practice counting occurrences and comparing frequencies."
    },
    {
        title: "Migratory Birds",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/migratory-birds/problem",
        description: "Find the bird type observed most frequently, choosing the smallest ID in a tie. Practice frequency arrays."
    }
],

// ==================== DAY 38 ====================
// Counting Occurrences
38: [
    {
        title: "Single Number",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/single-number/",
        description: "Find the element that appears once while all other elements appear twice. Practice XOR bit manipulation."
    },
    {
        title: "I_love_username",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/155/A",
        description: "Count how many scores are amazing by being strictly higher or lower than all previous scores. Practice traversal and tracking minimum and maximum."
    },
    {
        title: "Sales by Match",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/sock-merchant/problem",
        description: "Count the number of matching pairs of socks by color. Practice frequency counting and integer division."
    }
],

// ==================== DAY 39 ====================
// Counting + Sorting
39: [
    {
        title: "Sort Colors",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/sort-colors/",
        description: "Sort an array containing only 0, 1, and 2 without using a built-in sorting function. Practice the Dutch National Flag algorithm."
    },
    {
        title: "Gravity Flip",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/405/A",
        description: "Determine the final arrangement of columns after gravity changes direction. Practice sorting and array manipulation."
    },
    {
        title: "Counting Sort 2",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/counting-sort-2/problem",
        description: "Sort an array using counting sort and return the sorted sequence. Practice frequency arrays and cumulative output."
    }
],

// ==================== DAY 40 ====================
// Pattern Revision
40: [
    {
        title: "Top K Frequent Elements",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/top-k-frequent-elements/",
        description: "Return the k most frequent elements in an array. Practice hash maps, heaps, and bucket sort."
    },
    {
        title: "Dragons",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/230/A",
        description: "Determine whether a character can defeat all dragons by increasing strength after each victory. Practice greedy sorting and condition checking."
    },
    {
        title: "Sparse Arrays",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/sparse-arrays/problem",
        description: "Count how many times each query string appears in a collection of strings. Practice hash maps and frequency counting."
    }
],
// ==================== DAY 41 ====================
// String Traversal
41: [
    {
        title: "Reverse String",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/reverse-string/",
        description: "Reverse the characters of a string in-place. Practice two pointers and character swapping."
    },
    {
        title: "Word",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/59/A",
        description: "Convert a word to lowercase or uppercase based on the count of lowercase and uppercase letters. Practice character counting and case conversion."
    },
    {
        title: "CamelCase",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/camelcase/problem",
        description: "Count the number of words in a camelCase string. Practice string traversal and uppercase character detection."
    }
],

// ==================== DAY 42 ====================
// String Comparison
42: [
    {
        title: "Valid Anagram",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/valid-anagram/",
        description: "Determine whether two strings contain the same characters with the same frequencies. Practice frequency arrays and sorting."
    },
    {
        title: "Petya and Strings",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/112/A",
        description: "Compare two strings lexicographically without considering letter case. Practice case conversion and string comparison."
    },
    {
        title: "Making Anagrams",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/making-anagrams/problem",
        description: "Find the minimum number of character deletions required to make two strings anagrams. Practice frequency counting."
    }
],

// ==================== DAY 43 ====================
// Palindrome Strings
43: [
    {
        title: "Valid Palindrome",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/valid-palindrome/",
        description: "Check whether a string is a palindrome after ignoring non-alphanumeric characters and letter case. Practice two pointers."
    },
    {
        title: "Palindrome",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset",
        description: "Practice checking or constructing palindromic strings. Focus on symmetry and character manipulation."
    },
    {
        title: "Palindrome Index",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/palindrome-index/problem",
        description: "Find the index of a character that can be removed to make a string a palindrome. Practice two pointers and palindrome validation."
    }
],

// ==================== DAY 44 ====================
// Character Frequency
44: [
    {
        title: "First Unique Character in a String",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/first-unique-character-in-a-string/",
        description: "Find the index of the first character that appears exactly once. Practice frequency arrays and string traversal."
    },
    {
        title: "Boy or Girl",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/236/A",
        description: "Count distinct characters in a username and decide the result based on whether the count is odd or even. Practice sets."
    },
    {
        title: "Pangrams",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/pangrams/problem",
        description: "Determine whether a sentence contains every letter of the English alphabet. Practice character frequency and sets."
    }
],

// ==================== DAY 45 ====================
// String Transformation
45: [
    {
        title: "To Lower Case",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/to-lower-case/",
        description: "Convert all uppercase letters in a string to lowercase. Practice character transformation and ASCII values."
    },
    {
        title: "Word Capitalization",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/281/A",
        description: "Capitalize the first character of a word while keeping the remaining characters unchanged. Practice string indexing."
    },
    {
        title: "Caesar Cipher",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/caesar-cipher-1/problem",
        description: "Encrypt a string by shifting each alphabetic character by a given number of positions. Practice modular arithmetic and character handling."
    }
],

// ==================== DAY 46 ====================
// Remove / Replace Characters
46: [
    {
        title: "Remove All Adjacent Duplicates in String",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
        description: "Repeatedly remove adjacent equal characters until no such pairs remain. Practice stack-based string processing."
    },
    {
        title: "Stones on the Table",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/266/A",
        description: "Count how many stones must be removed to ensure no two adjacent stones have the same color. Practice string traversal."
    },
    {
        title: "Super Reduced String",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/reduced-string/problem",
        description: "Remove adjacent matching character pairs until the string is reduced. Practice stack and string manipulation."
    }
],

// ==================== DAY 47 ====================
// Prefix & Common Strings
47: [
    {
        title: "Longest Common Prefix",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/longest-common-prefix/",
        description: "Find the longest prefix shared by all strings in an array. Practice string comparison and prefix traversal."
    },
    {
        title: "String Task",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/118/A",
        description: "Remove vowels, convert remaining letters to lowercase, and add dots before them. Practice filtering and string transformation."
    },
    {
        title: "HackerRank in a String!",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem",
        description: "Check whether the word 'hackerrank' appears as a subsequence in a given string. Practice two pointers and subsequence matching."
    }
],

// ==================== DAY 48 ====================
// Substring & Searching
48: [
    {
        title: "Find the Index of the First Occurrence in a String",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        description: "Find the starting index of the first occurrence of a pattern within a string. Practice substring searching."
    },
    {
        title: "Pangram",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/520/A",
        description: "Determine whether a string contains every letter of the English alphabet. Practice character tracking and sets."
    },
    {
        title: "Two Strings",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/two-strings/problem",
        description: "Determine whether two strings share at least one common character. Practice sets and frequency arrays."
    }
],

// ==================== DAY 49 ====================
// String Construction
49: [
    {
        title: "Add Strings",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/add-strings/",
        description: "Add two non-negative integers represented as strings without converting them into numeric types. Practice digit-by-digit addition and carry handling."
    },
    {
        title: "Way Too Long Words",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/71/A",
        description: "Abbreviate words longer than 10 characters using the first character, middle length, and last character. Practice string construction."
    },
    {
        title: "Separate the Numbers",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/separate-the-numbers/problem",
        description: "Determine whether a string can be split into a sequence of consecutive increasing numbers. Practice substring generation and numeric sequence validation."
    }
],

// ==================== DAY 50 ====================
// String Pattern Revision
50: [
    {
        title: "Isomorphic Strings",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/isomorphic-strings/",
        description: "Check whether characters in one string can be mapped one-to-one to characters in another string. Practice character mapping."
    },
    {
        title: "Anton and Polyhedrons",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/785/A",
        description: "Calculate the total number of faces of given polyhedrons based on their names. Practice string matching and counting."
    },
    {
        title: "Alternating Characters",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/alternating-characters/problem",
        description: "Find the minimum number of deletions required to make a string alternate between A and B. Practice adjacent character comparison."
    }
],
// ==================== DAY 51 ====================
// Sorting Basics
51: [
    {
        title: "Sort an Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/sort-an-array/",
        description: "Sort an array of integers in ascending order. Practice sorting algorithms such as Merge Sort, Quick Sort, and Heap Sort."
    },
    {
        title: "Gravity Flip",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/405/A",
        description: "Determine the final arrangement of columns after gravity changes direction. Practice sorting and array manipulation."
    },
    {
        title: "Insertion Sort - Part 1",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/insertionsort1/problem",
        description: "Insert the last element into its correct position in a sorted portion of an array. Practice insertion sort and element shifting."
    }
],

// ==================== DAY 52 ====================
// Sorting & Comparison
52: [
    {
        title: "Merge Sorted Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/merge-sorted-array/",
        description: "Merge two sorted arrays into one sorted array in-place. Practice backward traversal and two pointers."
    },
    {
        title: "Helpful Maths",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/339/A",
        description: "Rearrange the numbers in a sum expression into sorted order. Practice sorting and string manipulation."
    },
    {
        title: "Mark and Toys",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/mark-and-toys/problem",
        description: "Find the maximum number of toys that can be purchased within a given budget. Practice greedy selection and sorting."
    }
],

// ==================== DAY 53 ====================
// Sorting + Greedy
53: [
    {
        title: "Assign Cookies",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/assign-cookies/",
        description: "Maximize the number of children satisfied by assigning cookies according to their greed factors. Practice greedy strategy and sorting."
    },
    {
        title: "Twins",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/160/A",
        description: "Choose the minimum number of coins such that their total value exceeds the sum of the remaining coins. Practice greedy sorting."
    },
    {
        title: "Minimum Absolute Difference in an Array",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem",
        description: "Find the minimum absolute difference between any two array elements. Practice sorting and adjacent comparisons."
    }
],

// ==================== DAY 54 ====================
// Sorting Duplicates
54: [
    {
        title: "Contains Duplicate",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/contains-duplicate/",
        description: "Determine whether an array contains any repeated element. Practice sorting and hash set-based duplicate detection."
    },
    {
        title: "Distinct Numbers",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/1097/A",
        description: "Practice identifying distinct values in a collection. Focus on duplicate removal and comparison."
    },
    {
        title: "Find the Median",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/find-the-median/problem",
        description: "Find the middle element of an array after sorting it. Practice sorting and index calculation."
    }
],

// ==================== DAY 55 ====================
// Custom Sorting
55: [
    {
        title: "Sort Characters By Frequency",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/sort-characters-by-frequency/",
        description: "Rearrange characters in descending order of their frequencies. Practice hash maps and custom sorting."
    },
    {
        title: "Amusing Joke",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/141/A",
        description: "Determine whether a guest's name can be formed from the letters of two names combined. Practice frequency counting and string comparison."
    },
    {
        title: "Big Sorting",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/big-sorting/problem",
        description: "Sort very large numbers represented as strings. Practice custom comparators and string-based numeric sorting."
    }
],

// ==================== DAY 56 ====================
// Sorting + Two Pointers
56: [
    {
        title: "Squares of a Sorted Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
        description: "Square all elements of a sorted array and return the result in sorted order. Practice two pointers."
    },
    {
        title: "Dragons",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/230/A",
        description: "Determine whether a character can defeat all dragons by increasing strength after each victory. Practice greedy sorting."
    },
    {
        title: "Insertion Sort - Part 2",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/insertionsort2/problem",
        description: "Sort an entire array using insertion sort and display the array after each insertion. Practice iterative sorting."
    }
],

// ==================== DAY 57 ====================
// Sorting + Greedy
57: [
    {
        title: "Largest Number",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/largest-number/",
        description: "Arrange integers to form the largest possible concatenated number. Practice custom comparator-based sorting."
    },
    {
        title: "Taxi",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/158/B",
        description: "Find the minimum number of taxis required to transport groups of different sizes. Practice greedy grouping."
    },
    {
        title: "Luck Balance",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/luck-balance/problem",
        description: "Maximize luck by deciding which important contests to lose and which to win. Practice greedy sorting."
    }
],

// ==================== DAY 58 ====================
// Sorting Arrays In-Place
58: [
    {
        title: "Sort Colors",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/sort-colors/",
        description: "Sort an array containing only 0, 1, and 2 without using a built-in sorting function. Practice the Dutch National Flag algorithm."
    },
    {
        title: "Sort the Array",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/451/B",
        description: "Determine whether reversing one continuous subarray can make the entire array sorted. Practice sorting and subarray identification."
    },
    {
        title: "Quicksort 1 - Partition",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/quicksort1/problem",
        description: "Partition an array around a pivot so smaller elements appear before it and larger elements after it. Practice Quick Sort partitioning."
    }
],

// ==================== DAY 59 ====================
// Interval Sorting
59: [
    {
        title: "Merge Intervals",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/merge-intervals/",
        description: "Merge all overlapping intervals into non-overlapping intervals. Practice sorting and interval processing."
    },
    {
        title: "Reconnaissance 2",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/34/A",
        description: "Find the pair of soldiers standing next to each other in a circle with the minimum height difference. Practice circular arrays and comparisons."
    },
    {
        title: "Minimum Number of Platforms",
        platform: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/minimum-number-of-platforms-1587115620/1",
        description: "Determine the minimum number of railway platforms needed so no train has to wait. Practice sorting arrival and departure times and greedy techniques."
    }
],

// ==================== DAY 60 ====================
// Sorting Pattern Revision
60: [
    {
        title: "Relative Sort Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/relative-sort-array/",
        description: "Sort one array according to the order specified by another array, then sort remaining elements. Practice frequency counting and custom sorting."
    },
    {
        title: "Vanya and Lanterns",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/492/B",
        description: "Find the minimum radius required for lanterns to illuminate an entire street. Practice sorting and maximum gap calculation."
    },
    {
        title: "Closest Numbers",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/closest-numbers/problem",
        description: "Find all pairs of numbers having the smallest absolute difference. Practice sorting and adjacent element comparison."
    }
],
// ==================== DAY 61 ====================
// Two Pointers Introduction
61: [
    {
        title: "Valid Palindrome",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/valid-palindrome/",
        description: "Check whether a string is a palindrome after ignoring non-alphanumeric characters and letter case. Practice opposite-direction two pointers."
    },
    {
        title: "Reverse String",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/reverse-string/",
        description: "Reverse a character array in-place by swapping characters from both ends. Practice two pointers."
    },
    {
        title: "Stones on the Table",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/266/A",
        description: "Count the minimum number of stones to remove so that no two adjacent stones have the same color. Practice sequential traversal."
    }
],

// ==================== DAY 62 ====================
// Opposite Direction Pointers
62: [
    {
        title: "Two Sum II — Input Array Is Sorted",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
        description: "Find two numbers in a sorted array whose sum equals the target. Practice left and right pointers."
    },
    {
        title: "Vanya and Fence",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/677/A",
        description: "Calculate the total width needed for people to pass through a fence based on their heights. Practice condition-based counting."
    },
    {
        title: "Squares of a Sorted Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
        description: "Square each number and return the squares in sorted order. Practice two pointers from both ends."
    }
],

// ==================== DAY 63 ====================
// Palindrome Two Pointers
63: [
    {
        title: "Valid Palindrome II",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/valid-palindrome-ii/",
        description: "Check whether a string can become a palindrome by deleting at most one character. Practice two pointers and mismatch handling."
    },
    {
        title: "Palindrome Number",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/palindrome-number/",
        description: "Determine whether an integer reads the same forward and backward. Practice digit manipulation and palindrome checking."
    },
    {
        title: "Word",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/59/A",
        description: "Convert a word to uppercase or lowercase based on the majority of its letters. Practice character counting and transformation."
    }
],

// ==================== DAY 64 ====================
// Pair Sum
64: [
    {
        title: "3Sum",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/3sum/",
        description: "Find all unique triplets in an array whose sum equals zero. Practice sorting and two pointers."
    },
    {
        title: "Sum of Two Numbers",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset",
        description: "Practice finding two numbers that satisfy a given sum condition. Focus on pair search and array traversal."
    },
    {
        title: "Two Sum",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/two-sum/",
        description: "Find two array elements whose sum equals the target. Practice hash maps and pair searching."
    }
],

// ==================== DAY 65 ====================
// Pairing & Sorted Arrays
65: [
    {
        title: "Container With Most Water",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/container-with-most-water/",
        description: "Find two vertical lines that form a container holding the maximum amount of water. Practice greedy two-pointer movement."
    },
    {
        title: "Number of Pairs",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/1538/C",
        description: "Count pairs whose sum lies within a specified range. Practice sorting, two pointers, and counting valid pairs."
    },
    {
        title: "Remove Duplicates from Sorted Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        description: "Remove duplicates from a sorted array in-place while preserving unique elements. Practice slow and fast pointers."
    }
],

// ==================== DAY 66 ====================
// In-Place Two Pointers
66: [
    {
        title: "Move Zeroes",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/move-zeroes/",
        description: "Move all zeroes to the end while maintaining the relative order of non-zero elements. Practice in-place two pointers."
    },
    {
        title: "Sort Array By Parity",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/sort-array-by-parity/",
        description: "Rearrange an array so even numbers appear before odd numbers. Practice partitioning with two pointers."
    },
    {
        title: "Remove Element",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/remove-element/",
        description: "Remove all occurrences of a specified value in-place. Practice slow and fast pointer techniques."
    }
],

// ==================== DAY 67 ====================
// Two Pointers + Sorting
67: [
    {
        title: "3Sum Closest",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/3sum-closest/",
        description: "Find a triplet whose sum is closest to a given target. Practice sorting and two-pointer pair search."
    },
    {
        title: "Boats to Save People",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/boats-to-save-people/",
        description: "Find the minimum number of boats needed to carry people under a weight limit. Practice greedy sorting and two pointers."
    },
    {
        title: "Two Sum Less Than K",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/two-sum-less-than-k/",
        description: "Find the largest pair sum that is strictly less than k. Practice sorting and two-pointer movement."
    }
],

// ==================== DAY 68 ====================
// Advanced Pair Search
68: [
    {
        title: "4Sum",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/4sum/",
        description: "Find all unique quadruplets whose sum equals a target. Practice sorting, nested loops, and two pointers."
    },
    {
        title: "3Sum",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/3sum/",
        description: "Find unique triplets with a sum of zero. Practice duplicate skipping and two-pointer search."
    },
    {
        title: "Number of Pairs",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/1538/C",
        description: "Count pairs with sums in a given interval. Practice sorting and efficient pair counting."
    }
],

// ==================== DAY 69 ====================
// Two Pointers + String
69: [
    {
        title: "Reverse Words in a String",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/reverse-words-in-a-string/",
        description: "Reverse the order of words while handling extra spaces. Practice string traversal and two-pointer techniques."
    },
    {
        title: "Backspace String Compare",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/backspace-string-compare/",
        description: "Compare two strings after applying backspace characters. Practice reverse traversal and two pointers."
    },
    {
        title: "Merge Strings Alternately",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/merge-strings-alternately/",
        description: "Merge characters from two strings alternately, appending any remaining characters. Practice pointer-based traversal."
    }
],

// ==================== DAY 70 ====================
// Two Pointers Pattern Revision
70: [
    {
        title: "Trapping Rain Water",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/trapping-rain-water/",
        description: "Calculate how much rainwater can be trapped between elevation bars. Practice two pointers, maximum boundaries, and optimization."
    },
    {
        title: "4Sum",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/4sum/",
        description: "Find unique quadruplets whose sum equals a target. Practice nested loops, sorting, and two pointers."
    },
    {
        title: "Minimum Difference Between Highest and Lowest of K Scores",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/",
        description: "Select k scores so the difference between the highest and lowest is minimized. Practice sorting and sliding windows."
    }
],
// ==================== DAY 71 ====================
// Prefix Sum Fundamentals
71: [
  {
    title: "Running Sum of 1d Array",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/running-sum-of-1d-array/",
    description: "Calculate the cumulative sum at every index. Learn the basic prefix sum technique."
  },
  {
    title: "Find Pivot Index",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/find-pivot-index/",
    description: "Find an index where the sum of elements on the left equals the sum on the right."
  },
  {
    title: "Prefix Sum Queries",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset?tags=prefix-sums",
    description: "Practice prefix sum concepts to answer range-related queries efficiently."
  }
],

// ==================== DAY 72 ====================
// Range Sum
72: [
  {
    title: "Range Sum Query — Immutable",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/range-sum-query-immutable/",
    description: "Preprocess an array using prefix sums to answer multiple range sum queries in O(1)."
  },
  {
    title: "Find the Middle Index in Array",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/find-the-middle-index-in-array/",
    description: "Find an index where the sum of the left and right portions of the array is equal."
  },
  {
    title: "Little Girl and Maximum Sum",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/276/C",
    description: "Maximize the total sum of range queries by sorting array values and query frequencies."
  }
],

// ==================== DAY 73 ====================
// Prefix Sum + Array
73: [
  {
    title: "Maximum Average Subarray I",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/maximum-average-subarray-i/",
    description: "Find the maximum average of a contiguous subarray of fixed length using sliding window sums."
  },
  {
    title: "Subarray Sums Divisible by K",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
    description: "Count subarrays whose sum is divisible by K using prefix sum remainders."
  },
  {
    title: "Kuriyama Mirai's Stones",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/433/B",
    description: "Answer range sum queries on both original and sorted arrays using prefix sums."
  }
],

// ==================== DAY 74 ====================
// Prefix Sum + Hashing
74: [
  {
    title: "Subarray Sum Equals K",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/subarray-sum-equals-k/",
    description: "Count contiguous subarrays with sum K using prefix sums and a hash map."
  },
  {
    title: "Contiguous Array",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/contiguous-array/",
    description: "Find the longest contiguous subarray with equal numbers of 0s and 1s by tracking balance."
  },
  {
    title: "Number of Subarrays with Sum 0",
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/zero-sum-subarrays1825/1",
    description: "Count subarrays whose sum is zero using repeated prefix sum values."
  }
],

// ==================== DAY 75 ====================
// Prefix Sum + Counting
75: [
  {
    title: "Number of Ways to Split Array",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/number-of-ways-to-split-array/",
    description: "Count valid split positions where the left sum is at least the right sum."
  },
  {
    title: "Find the Highest Altitude",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/find-the-highest-altitude/",
    description: "Compute running altitude changes and return the maximum altitude reached."
  },
  {
    title: "Ilya and Queries",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/313/B",
    description: "Use prefix counts to answer queries about adjacent equal characters in a string."
  }
],

// ==================== DAY 76 ====================
// Prefix Sum + Subarrays
76: [
  {
    title: "Maximum Size Subarray Sum Equals k",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/",
    description: "Find the longest subarray with sum K using prefix sums and earliest index storage."
  },
  {
    title: "Number of Subarrays with Odd Sum",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/",
    description: "Count subarrays with odd sum by tracking even and odd prefix sum counts."
  },
  {
    title: "Number of Ways",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/466/C",
    description: "Count ways to divide an array into three non-empty parts with equal sums."
  }
],

// ==================== DAY 77 ====================
// Prefix Sum + Difference Array
77: [
  {
    title: "Corporate Flight Bookings",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/corporate-flight-bookings/",
    description: "Apply range booking updates efficiently using a difference array."
  },
  {
    title: "Range Addition",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/range-addition/",
    description: "Perform multiple range increment operations using a difference array and prefix accumulation."
  },
  {
    title: "Greg and Array",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/295/A",
    description: "Use two levels of difference arrays to efficiently apply repeated range operations."
  }
],

// ==================== DAY 78 ====================
// 2D Prefix Sum Introduction
78: [
  {
    title: "Range Sum Query 2D — Immutable",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
    description: "Build a 2D prefix sum matrix to answer rectangular region sum queries in O(1)."
  },
  {
    title: "Matrix Block Sum",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/matrix-block-sum/",
    description: "Calculate the sum of each cell's surrounding K-radius block using 2D prefix sums."
  },
  {
    title: "Fence",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/363/B",
    description: "Find the consecutive segment of fixed length with the minimum total height using prefix sums."
  }
],

// ==================== DAY 79 ====================
// Prefix Sum + Optimization
79: [
  {
    title: "Product of Array Except Self",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/product-of-array-except-self/",
    description: "Compute products excluding each index without division using prefix and suffix products."
  },
  {
    title: "Minimum Operations to Reduce X to Zero",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/",
    description: "Transform the problem into finding the longest subarray with sum equal to totalSum minus X."
  },
  {
    title: "Little Girl and Maximum Sum",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/276/C",
    description: "Revisit range query frequency counting and greedy sorting to maximize the total sum."
  }
],

// ==================== DAY 80 ====================
// Prefix Sum Pattern Revision
80: [
  {
    title: "Count Number of Nice Subarrays",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/count-number-of-nice-subarrays/",
    description: "Count subarrays containing exactly K odd numbers using prefix counts or a transformation."
  },
  {
    title: "Make Sum Divisible by P",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/make-sum-divisible-by-p/",
    description: "Find the shortest subarray to remove so the remaining sum is divisible by P."
  },
  {
    title: "Number of Ways",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/466/C",
    description: "Revise prefix sum counting to split an array into three equal-sum non-empty parts."
  }
],
// ==================== DAY 81 ====================
// Hash Set Basics
81: [
  {
    title: "Contains Duplicate",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/contains-duplicate/",
    description: "Determine whether an array contains any repeated element using a hash set."
  },
  {
    title: "Happy Number",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/happy-number/",
    description: "Repeatedly replace a number with the sum of squared digits and detect cycles using a set."
  },
  {
    title: "Boy or Girl",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/236/A",
    description: "Count distinct characters in a username to determine the gender according to the problem's rule."
  }
],

// ==================== DAY 82 ====================
// Hash Map Basics
82: [
  {
    title: "Two Sum",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/two-sum/",
    description: "Find two array indices whose values add up to the target using a hash map."
  },
  {
    title: "First Unique Character in a String",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/first-unique-character-in-a-string/",
    description: "Find the first character that appears exactly once using frequency counting."
  },
  {
    title: "Amusing Joke",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/141/A",
    description: "Check whether the letters of two names and a pile of letters match the third name."
  }
],

// ==================== DAY 83 ====================
// Frequency Counting
83: [
  {
    title: "Valid Anagram",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/valid-anagram/",
    description: "Determine whether two strings contain exactly the same characters with matching frequencies."
  },
  {
    title: "Ransom Note",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/ransom-note/",
    description: "Check whether a ransom note can be constructed from available magazine characters."
  },
  {
    title: "Anton and Letters",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/443/A",
    description: "Count the distinct lowercase letters appearing in a set-like string."
  }
],

// ==================== DAY 84 ====================
// Hashing + Arrays
84: [
  {
    title: "Intersection of Two Arrays",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/intersection-of-two-arrays/",
    description: "Find the unique elements common to two arrays using sets."
  },
  {
    title: "Intersection of Two Arrays II",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
    description: "Find common elements while preserving the number of occurrences in both arrays."
  },
  {
    title: "I_love_username",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/155/A",
    description: "Count amazing performances where a score exceeds all previous maximums or minimums."
  }
],

// ==================== DAY 85 ====================
// Duplicate Detection
85: [
  {
    title: "Contains Duplicate II",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/contains-duplicate-ii/",
    description: "Check whether equal values occur at indices whose distance is at most K."
  },
  {
    title: "Find All Duplicates in an Array",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    description: "Identify all values that appear twice in an array using efficient duplicate detection."
  },
  {
    title: "Distinct Numbers",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/1097/A",
    description: "Count the distinct cards among the given cards using set membership."
  }
],

// ==================== DAY 86 ====================
// Hashing + String
86: [
  {
    title: "Group Anagrams",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/group-anagrams/",
    description: "Group strings that are anagrams by using character frequencies or sorted strings as hash keys."
  },
  {
    title: "Isomorphic Strings",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/isomorphic-strings/",
    description: "Check whether characters in one string can map consistently and uniquely to another string."
  },
  {
    title: "Remove Duplicates",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/978/A",
    description: "Remove repeated elements while keeping the last occurrence of each number in the original order."
  }
],

// ==================== DAY 87 ====================
// Frequency Map + Ranking
87: [
  {
    title: "Top K Frequent Elements",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/top-k-frequent-elements/",
    description: "Return the K most frequent numbers using a frequency map and heap or bucket sorting."
  },
  {
    title: "Sort Characters By Frequency",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/sort-characters-by-frequency/",
    description: "Rearrange a string so characters appear in descending order of their frequency."
  },
  {
    title: "Registration System",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/4/C",
    description: "Manage username registrations and generate unique names when a username already exists."
  }
],

// ==================== DAY 88 ====================
// Hashing + Sequence
88: [
  {
    title: "Longest Consecutive Sequence",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/longest-consecutive-sequence/",
    description: "Find the longest consecutive integer sequence in an unsorted array in O(n) time."
  },
  {
    title: "Find the Difference",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/find-the-difference/",
    description: "Find the extra character added to a string using character counts or XOR."
  },
  {
    title: "Presents",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/136/A",
    description: "Determine who gave a present to each person by reversing the given mapping."
  }
],

// ==================== DAY 89 ====================
// Hashing + Prefix Sum
89: [
  {
    title: "Subarray Sum Equals K",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/subarray-sum-equals-k/",
    description: "Count subarrays with sum K using prefix sums and a hash map of prefix frequencies."
  },
  {
    title: "Contiguous Array",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/contiguous-array/",
    description: "Find the longest subarray with equal 0s and 1s by tracking prefix balance in a map."
  },
  {
    title: "Number of Subarrays with Sum 0",
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/zero-sum-subarrays1825/1",
    description: "Count zero-sum subarrays by identifying repeated prefix sums."
  }
],

// ==================== DAY 90 ====================
// Hashing Pattern Revision
90: [
  {
    title: "4Sum II",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/4sum-ii/",
    description: "Count quadruples whose values sum to zero by storing pair sums in a hash map."
  },
  {
    title: "Design HashMap",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/design-hashmap/",
    description: "Implement a hash map with put, get, and remove operations without using built-in map libraries."
  },
  {
    title: "Word Pattern",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/word-pattern/",
    description: "Check whether a pattern maps bijectively to words in a given string."
  }
],
// ==================== DAY 91 ====================
// Binary Search Fundamentals
91: [
  {
    title: "Binary Search",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/binary-search/",
    description: "Find a target in a sorted array by repeatedly dividing the search interval in half."
  },
  {
    title: "Search Insert Position",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/search-insert-position/",
    description: "Find the target index or the position where it should be inserted to maintain sorted order."
  },
  {
    title: "T-primes",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/230/B",
    description: "Determine whether each number is a T-prime, meaning it is the square of a prime number."
  }
],

// ==================== DAY 92 ====================
// Lower Bound & Upper Bound
92: [
  {
    title: "First Bad Version",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/first-bad-version/",
    description: "Find the first bad version among versions using binary search on a monotonic condition."
  },
  {
    title: "Find First and Last Position of Element in Sorted Array",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    description: "Find the first and last occurrence of a target in a sorted array using binary search."
  },
  {
    title: "Interesting Drink",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/706/B",
    description: "For each budget, count how many drink prices are affordable using sorting and binary search."
  }
],

// ==================== DAY 93 ====================
// Binary Search on Sorted Array
93: [
  {
    title: "Search in a Sorted Array of Unknown Size",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/",
    description: "Search a sorted array without knowing its length by expanding the range and applying binary search."
  },
  {
    title: "Find Smallest Letter Greater Than Target",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/find-smallest-letter-greater-than-target/",
    description: "Find the smallest character strictly greater than the target, wrapping around if needed."
  },
  {
    title: "Arrival of the General",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/144/A",
    description: "Minimize swaps needed to move the tallest soldier to the front and shortest to the back."
  }
],

// ==================== DAY 94 ====================
// Binary Search + Conditions
94: [
  {
    title: "Sqrt(x)",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/sqrtx/",
    description: "Calculate the integer square root of a non-negative number without using built-in square root."
  },
  {
    title: "Valid Perfect Square",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/valid-perfect-square/",
    description: "Determine whether a number is a perfect square using binary search."
  },
  {
    title: "Fence",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/363/B",
    description: "Find the consecutive segment of fixed length with the minimum sum of fence heights."
  }
],

// ==================== DAY 95 ====================
// Search in Rotated Array
95: [
  {
    title: "Search in Rotated Sorted Array",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    description: "Search for a target in a rotated sorted array in O(log n) time."
  },
  {
    title: "Find Minimum in Rotated Sorted Array",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    description: "Find the smallest element in a rotated sorted array using binary search."
  },
  {
    title: "Search in Rotated Sorted Array II",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
    description: "Search a rotated sorted array that may contain duplicates."
  }
],

// ==================== DAY 96 ====================
// Binary Search + Peak
96: [
  {
    title: "Find Peak Element",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/find-peak-element/",
    description: "Find an element greater than its neighbors using binary search on the slope."
  },
  {
    title: "Worms",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/474/B",
    description: "Find which pile contains a given worm using cumulative pile sizes and binary search."
  },
  {
    title: "Peak Index in a Mountain Array",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
    description: "Find the peak index in a mountain array using binary search."
  }
],

// ==================== DAY 97 ====================
// Binary Search on Answer
97: [
  {
    title: "Koko Eating Bananas",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/koko-eating-bananas/",
    description: "Find the minimum eating speed that allows Koko to finish all bananas within H hours."
  },
  {
    title: "Maximum Median",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/1201/C",
    description: "Maximize the median of an array by distributing a limited number of increments."
  },
  {
    title: "Minimum Number of Days to Make m Bouquets",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
    description: "Find the minimum day needed to make the required bouquets using binary search on the answer."
  }
],

// ==================== DAY 98 ====================
// Binary Search + Optimization
98: [
  {
    title: "Capacity To Ship Packages Within D Days",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
    description: "Find the minimum ship capacity needed to deliver all packages within D days."
  },
  {
    title: "Sagheer and Nubian Market",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/812/C",
    description: "Find the maximum number of items affordable under a budget by binary searching the item count."
  },
  {
    title: "Split Array Largest Sum",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/split-array-largest-sum/",
    description: "Split an array into K subarrays while minimizing the largest subarray sum."
  }
],

// ==================== DAY 99 ====================
// Advanced Search Basics
99: [
  {
    title: "Median of Two Sorted Arrays",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    description: "Find the median of two sorted arrays in O(log(min(m,n))) time using partition-based binary search."
  },
  {
    title: "Magic Ship",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/1117/C",
    description: "Find the minimum number of days for a ship to reach its destination with periodic wind movements."
  },
  {
    title: "Find K-th Smallest Pair Distance",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/find-k-th-smallest-pair-distance/",
    description: "Find the K-th smallest absolute pair distance by binary searching the distance and counting pairs."
  }
],

// ==================== DAY 100 ====================
// Binary Search Pattern Revision
100: [
  {
    title: "Find Minimum in Rotated Sorted Array",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    description: "Revise binary search for finding the minimum element in a rotated sorted array."
  },
  {
    title: "Multiplication Table",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/448/D",
    description: "Find the K-th smallest number in a multiplication table using binary search and counting."
  },
  {
    title: "Find a Peak Element II",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/find-a-peak-element-ii/",
    description: "Find a peak in a 2D matrix by applying binary search across columns or rows."
  }
],
// ==================== DAY 101 ====================
// Recursion Fundamentals
101: [
  {
    title: "Fibonacci Number",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/fibonacci-number/",
    description: "Calculate the Nth Fibonacci number using the recursive relation F(n) = F(n-1) + F(n-2)."
  },
  {
    title: "Sum of Digits",
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/sum-of-digits1742/1",
    description: "Find the sum of all digits of a number using recursion by processing one digit at a time."
  },
  {
    title: "Theatre Square",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/1/A",
    description: "Calculate the minimum number of square tiles required to cover a rectangular theatre square."
  }
],

// ==================== DAY 102 ====================
// Factorial & Basic Recursion
102: [
  {
    title: "Factorial",
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/factorial/1",
    description: "Calculate the factorial of a number using the recursive relation n! = n × (n-1)!"
  },
  {
    title: "Power of Two",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/power-of-two/",
    description: "Determine whether a number is a power of two using recursion or bit manipulation."
  },
  {
    title: "Watermelon",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/4/A",
    description: "Determine whether a watermelon can be divided into two positive even-weight pieces."
  }
],

// ==================== DAY 103 ====================
// Recursive Number Problems
103: [
  {
    title: "Reverse Integer",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/reverse-integer/",
    description: "Reverse the digits of a signed integer while handling 32-bit integer overflow."
  },
  {
    title: "Palindrome Number",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/palindrome-number/",
    description: "Check whether an integer reads the same forward and backward."
  },
  {
    title: "Way Too Long Words",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/71/A",
    description: "Abbreviate words longer than 10 characters using their first and last letters and the middle length."
  }
],

// ==================== DAY 104 ====================
// Recursive String Problems
104: [
  {
    title: "Reverse String",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/reverse-string/",
    description: "Reverse a character array in-place using recursion or two pointers."
  },
  {
    title: "Valid Palindrome",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/valid-palindrome/",
    description: "Check whether a string is a palindrome after ignoring non-alphanumeric characters and case."
  },
  {
    title: "Word",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/59/A",
    description: "Convert a word to uppercase or lowercase based on which letter case occurs more frequently."
  }
],

// ==================== DAY 105 ====================
// Recursive Array Problems
105: [
  {
    title: "Binary Search",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/binary-search/",
    description: "Search for a target in a sorted array using recursive interval division."
  },
  {
    title: "Search in a Sorted Array",
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/binary-search/",
    description: "Apply binary search to locate a target in a sorted array by reducing the search range recursively."
  },
  {
    title: "Arrival of the General",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/144/A",
    description: "Minimize swaps required to move the tallest soldier to the beginning and shortest to the end."
  }
],

// ==================== DAY 106 ====================
// Recursive Power & Divide
106: [
  {
    title: "Pow(x, n)",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/powx-n/",
    description: "Compute x raised to n efficiently using recursive exponentiation by squaring."
  },
  {
    title: "Tower of Hanoi",
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/tower-of-hanoi/1",
    description: "Move all disks from the source rod to the destination rod using recursion and the auxiliary rod."
  },
  {
    title: "Petr and a Combination Lock",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/1097/B",
    description: "Determine whether a combination lock can reach 0 degrees by choosing plus or minus rotations."
  }
],

// ==================== DAY 107 ====================
// Recursion + Searching
107: [
  {
    title: "Search in a Sorted Array",
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/binary-search/",
    description: "Find an element in a sorted array using binary search and recursive calls."
  },
  {
    title: "K-th Symbol in Grammar",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/k-th-symbol-in-grammar/",
    description: "Find the Kth symbol in a recursively generated binary sequence without constructing the entire row."
  },
  {
    title: "Sum of Round Numbers",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/1352/A",
    description: "Represent a number as a sum of its non-zero place-value components."
  }
],

// ==================== DAY 108 ====================
// Recursion on Linked Lists
108: [
  {
    title: "Reverse Linked List",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/reverse-linked-list/",
    description: "Reverse a singly linked list using recursive pointer manipulation."
  },
  {
    title: "Merge Two Sorted Lists",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/merge-two-sorted-lists/",
    description: "Merge two sorted linked lists into one sorted list using recursion."
  },
  {
    title: "Swap Nodes in Pairs",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/swap-nodes-in-pairs/",
    description: "Swap every two adjacent nodes in a linked list using recursive calls."
  }
],

// ==================== DAY 109 ====================
// Recursive Decision Making
109: [
  {
    title: "Climbing Stairs",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/climbing-stairs/",
    description: "Count ways to climb stairs when each step allows either one or two stairs."
  },
  {
    title: "Combination Sum",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/combination-sum/",
    description: "Find all combinations of candidates that add up to a target using backtracking."
  },
  {
    title: "Petr and a Combination Lock",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/1097/B",
    description: "Explore all possible plus or minus rotations to determine whether the lock can reach 0 degrees."
  }
],

// ==================== DAY 110 ====================
// Recursion Pattern Revision
110: [
  {
    title: "K-th Symbol in Grammar",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/k-th-symbol-in-grammar/",
    description: "Revise recursive sequence generation and determine the Kth symbol using its parent position."
  },
  {
    title: "Fibonacci Number",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/fibonacci-number/",
    description: "Revise recursion base cases and recursive calls for calculating Fibonacci numbers."
  },
  {
    title: "Tower of Hanoi",
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/tower-of-hanoi/1",
    description: "Revise recursive problem decomposition by moving disks between three rods."
  }
],
// ==================== DAY 111 ====================
// Bitwise Operators
111: [
  {
    title: "Number of 1 Bits",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/number-of-1-bits/",
    description: "Count the number of set bits (1s) in the binary representation of an unsigned integer."
  },
  {
    title: "Binary Number to Decimal",
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/binary-number-to-decimal-number/",
    description: "Convert a binary number into its decimal representation using positional values."
  },
  {
    title: "Bit++",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/282/A",
    description: "Process increment and decrement statements and calculate the final value of a variable."
  }
],

// ==================== DAY 112 ====================
// AND, OR, XOR
112: [
  {
    title: "Single Number",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/single-number/",
    description: "Find the element that appears once when all other elements appear twice using XOR."
  },
  {
    title: "Power of Two",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/power-of-two/",
    description: "Check whether a number is a power of two using bitwise operations."
  },
  {
    title: "Petya and Strings",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/112/A",
    description: "Compare two strings lexicographically without considering letter case."
  }
],

// ==================== DAY 113 ====================
// Bit Counting
113: [
  {
    title: "Counting Bits",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/counting-bits/",
    description: "For every number from 0 to n, calculate the number of set bits in its binary representation."
  },
  {
    title: "Number of 1 Bits",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/number-of-1-bits/",
    description: "Count set bits using bit manipulation techniques such as n & (n - 1)."
  },
  {
    title: "Beautiful Matrix",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/263/A",
    description: "Find the minimum number of moves required to bring the 1 in a 5×5 matrix to its center."
  }
],

// ==================== DAY 114 ====================
// Bit Manipulation Basics
114: [
  {
    title: "Missing Number",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/missing-number/",
    description: "Find the missing number from a range using XOR or arithmetic sum."
  },
  {
    title: "Reverse Bits",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/reverse-bits/",
    description: "Reverse the order of bits in a 32-bit unsigned integer."
  },
  {
    title: "Boy or Girl",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset/problem/236/A",
    description: "Count distinct characters in a username and determine the result based on the count's parity."
  }
],

// ==================== DAY 115 ====================
// XOR Applications
115: [
  {
    title: "Single Number II",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/single-number-ii/",
    description: "Find the unique number when every other number appears three times using bit counting."
  },
  {
    title: "Sum of Two Integers",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/sum-of-two-integers/",
    description: "Calculate the sum of two integers without using the plus or minus operators."
  },
  {
    title: "Bitwise AND of Numbers Range",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
    description: "Compute the bitwise AND of all numbers in a given inclusive range."
  }
],

// ==================== DAY 116 ====================
// Bitmask Fundamentals
116: [
  {
    title: "Subsets",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/subsets/",
    description: "Generate all possible subsets of a distinct integer array using backtracking or bitmasks."
  },
  {
    title: "Find the Difference",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/find-the-difference/",
    description: "Find the extra character in a string using XOR or character frequency counting."
  },
  {
    title: "XOR",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset?tags=bitmasks",
    description: "Practice XOR-based problems involving bitwise properties and bitmask techniques."
  }
],

// ==================== DAY 117 ====================
// Bitwise Practice
117: [
  {
    title: "Hamming Distance",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/hamming-distance/",
    description: "Count the positions where two integers have different binary bits."
  },
  {
    title: "Complement of Base 10 Integer",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/complement-of-base-10-integer/",
    description: "Flip all bits in the binary representation of a number while ignoring leading zeros."
  },
  {
    title: "AND 0, Sum of XOR 0",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/and-0-sum-of-xor-0/",
    description: "Count valid triplets satisfying the given bitwise AND and XOR conditions."
  }
],

// ==================== DAY 118 ====================
// Bitwise Optimization
118: [
  {
    title: "Maximum XOR of Two Numbers in an Array",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
    description: "Find the maximum XOR value of any two array elements using bitwise greedy or a binary trie."
  },
  {
    title: "Minimum Flips to Make a OR b Equal to c",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/",
    description: "Find the minimum number of bit flips needed so that a OR b equals c."
  },
  {
    title: "Bitmask Problems",
    platform: "Codeforces",
    url: "https://codeforces.com/problemset?tags=bitmasks",
    description: "Practice bitmask-based problems to improve bitwise reasoning and optimization skills."
  }
],

// ==================== DAY 119 ====================
// Mixed Bit Manipulation
119: [
  {
    title: "Decode XORed Array",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/decode-xored-array/",
    description: "Reconstruct an original array from its adjacent XOR encoded values and the first element."
  },
  {
    title: "XOR Queries of a Subarray",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/xor-queries-of-a-subarray/",
    description: "Answer subarray XOR queries efficiently using XOR prefix values."
  },
  {
    title: "Find XOR of Numbers from 1 to N",
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/find-xor-of-numbers-from-1-to-n/",
    description: "Calculate XOR from 1 to N using the repeating pattern based on N modulo 4."
  }
],

// ==================== DAY 120 ====================
// Pattern Revision
120: [
  {
    title: "Single Number",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/single-number/",
    description: "Revise XOR cancellation to find the element occurring only once."
  },
  {
    title: "Counting Bits",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/counting-bits/",
    description: "Revise dynamic bit counting for all numbers from 0 to n."
  },
  {
    title: "Subsets",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/subsets/",
    description: "Revise subset generation using recursive backtracking and bitmask representation."
  }
],// ==================== DAY 121 ====================
// Stack Fundamentals
121: [
  { title: "Valid Parentheses", platform: "LeetCode", url: "https://leetcode.com/problems/valid-parentheses/", description: "Check whether brackets are correctly matched and nested." },
  { title: "Implement Stack using Arrays", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/implement-stack-using-array/1", description: "Implement stack operations using an array." },
  { title: "Next Round", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/158/A", description: "Count contestants qualifying for the next round." }
],

// ==================== DAY 122 ====================
// Stack Operations
122: [
  { title: "Min Stack", platform: "LeetCode", url: "https://leetcode.com/problems/min-stack/", description: "Design a stack that retrieves the minimum element in constant time." },
  { title: "Implement Stack using Queues", platform: "LeetCode", url: "https://leetcode.com/problems/implement-stack-using-queues/", description: "Implement stack operations using queue data structures." },
  { title: "Queue at the School", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/266/B", description: "Simulate students swapping positions in a queue." }
],

// ==================== DAY 123 ====================
// Stack Applications
123: [
  { title: "Baseball Game", platform: "LeetCode", url: "https://leetcode.com/problems/baseball-game/", description: "Calculate scores by processing operations with a stack." },
  { title: "Remove All Adjacent Duplicates in String", platform: "LeetCode", url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/", description: "Repeatedly remove adjacent duplicate characters." },
  { title: "Boy or Girl", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/236/A", description: "Determine the user's gender based on distinct username characters." }
],

// ==================== DAY 124 ====================
// Stack & Strings
124: [
  { title: "Backspace String Compare", platform: "LeetCode", url: "https://leetcode.com/problems/backspace-string-compare/", description: "Compare strings after applying backspace operations." },
  { title: "Make The String Great", platform: "LeetCode", url: "https://leetcode.com/problems/make-the-string-great/", description: "Remove adjacent characters that differ only by case." },
  { title: "Helpful Maths", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/339/A", description: "Sort the numbers in a sum expression." }
],

// ==================== DAY 125 ====================
// Stack Simulation
125: [
  { title: "Daily Temperatures", platform: "LeetCode", url: "https://leetcode.com/problems/daily-temperatures/", description: "Find days until a warmer temperature using a monotonic stack." },
  { title: "Next Greater Element I", platform: "LeetCode", url: "https://leetcode.com/problems/next-greater-element-i/", description: "Find the next greater element for each queried number." },
  { title: "Next Greater Element", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1", description: "Find the next greater element for every array element." }
],

// ==================== DAY 126 ====================
// Monotonic Stack Basics
126: [
  { title: "Online Stock Span", platform: "LeetCode", url: "https://leetcode.com/problems/online-stock-span/", description: "Calculate the stock span for each incoming price." },
  { title: "Next Smaller Element", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/next-smaller-element/1", description: "Find the next smaller element for each array element." },
  { title: "Next Greater Element II", platform: "LeetCode", url: "https://leetcode.com/problems/next-greater-element-ii/", description: "Find next greater elements in a circular array." }
],

// ==================== DAY 127 ====================
// Stack & Expression
127: [
  { title: "Evaluate Reverse Polish Notation", platform: "LeetCode", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", description: "Evaluate an arithmetic expression written in postfix notation." },
  { title: "Basic Calculator II", platform: "LeetCode", url: "https://leetcode.com/problems/basic-calculator-ii/", description: "Evaluate an expression containing addition, subtraction, multiplication, and division." },
  { title: "Decode String", platform: "LeetCode", url: "https://leetcode.com/problems/decode-string/", description: "Decode strings with nested repetition patterns." }
],

// ==================== DAY 128 ====================
// Stack Optimization
128: [
  { title: "Largest Rectangle in Histogram", platform: "LeetCode", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", description: "Find the largest rectangular area in a histogram." },
  { title: "Trapping Rain Water", platform: "LeetCode", url: "https://leetcode.com/problems/trapping-rain-water/", description: "Calculate the amount of rainwater trapped between bars." },
  { title: "Maximal Rectangle", platform: "LeetCode", url: "https://leetcode.com/problems/maximal-rectangle/", description: "Find the largest rectangle containing only ones in a binary matrix." }
],

// ==================== DAY 129 ====================
// Stack Mixed Practice
129: [
  { title: "Simplify Path", platform: "LeetCode", url: "https://leetcode.com/problems/simplify-path/", description: "Convert a Unix file path into its canonical form." },
  { title: "Remove K Digits", platform: "LeetCode", url: "https://leetcode.com/problems/remove-k-digits/", description: "Remove k digits to create the smallest possible number." },
  { title: "Asteroid Collision", platform: "LeetCode", url: "https://leetcode.com/problems/asteroid-collision/", description: "Simulate collisions between asteroids moving in opposite directions." }
],

// ==================== DAY 130 ====================
// Stack Revision
130: [
  { title: "Valid Parentheses", platform: "LeetCode", url: "https://leetcode.com/problems/valid-parentheses/", description: "Revisit bracket matching using a stack." },
  { title: "Min Stack", platform: "LeetCode", url: "https://leetcode.com/problems/min-stack/", description: "Practice retrieving the minimum value efficiently." },
  { title: "Daily Temperatures", platform: "LeetCode", url: "https://leetcode.com/problems/daily-temperatures/", description: "Review the monotonic stack approach for warmer days." }
],

// ==================== DAY 131 ====================
// Queue Fundamentals
131: [
  { title: "Implement Queue using Arrays", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/implement-queue-using-array/1", description: "Implement enqueue and dequeue operations using an array." },
  { title: "Implement Queue using Stacks", platform: "LeetCode", url: "https://leetcode.com/problems/implement-queue-using-stacks/", description: "Implement FIFO queue operations using stacks." },
  { title: "Queue at the School", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/266/B", description: "Simulate queue position swaps." }
],

// ==================== DAY 132 ====================
// Queue Operations
132: [
  { title: "Number of Recent Calls", platform: "LeetCode", url: "https://leetcode.com/problems/number-of-recent-calls/", description: "Count requests within a recent 3000-millisecond window." },
  { title: "Moving Average from Data Stream", platform: "LeetCode", url: "https://leetcode.com/problems/moving-average-from-data-stream/", description: "Maintain the moving average of the latest k values." },
  { title: "Team", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/231/A", description: "Count problems a team can solve based on member confidence." }
],

// ==================== DAY 133 ====================
// Queue Simulation
133: [
  { title: "Dota2 Senate", platform: "LeetCode", url: "https://leetcode.com/problems/dota2-senate/", description: "Simulate senators banning opponents until one party wins." },
  { title: "Time Needed to Buy Tickets", platform: "LeetCode", url: "https://leetcode.com/problems/time-needed-to-buy-tickets/", description: "Calculate the time required for a person to finish buying tickets." },
  { title: "Josephus Problem", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/josephus-problem/1", description: "Find the survivor in a circular elimination process." }
],

// ==================== DAY 134 ====================
// Circular Queue
134: [
  { title: "Design Circular Queue", platform: "LeetCode", url: "https://leetcode.com/problems/design-circular-queue/", description: "Design a queue with fixed capacity and circular indexing." },
  { title: "Design Circular Deque", platform: "LeetCode", url: "https://leetcode.com/problems/design-circular-deque/", description: "Implement a double-ended queue with circular storage." },
  { title: "Number of Students Unable to Eat Lunch", platform: "LeetCode", url: "https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/", description: "Simulate students choosing sandwiches until no one can eat." }
],

// ==================== DAY 135 ====================
// Queue & BFS Intro
135: [
  { title: "Binary Tree Level Order Traversal", platform: "LeetCode", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", description: "Traverse a binary tree level by level using a queue." },
  { title: "Average of Levels in Binary Tree", platform: "LeetCode", url: "https://leetcode.com/problems/average-of-levels-in-binary-tree/", description: "Calculate the average node value at each tree level." },
  { title: "Find the Town Judge", platform: "LeetCode", url: "https://leetcode.com/problems/find-the-town-judge/", description: "Identify a person trusted by everyone but who trusts nobody." }
],

// ==================== DAY 136 ====================
// Deque Fundamentals
136: [
  { title: "Sliding Window Maximum", platform: "LeetCode", url: "https://leetcode.com/problems/sliding-window-maximum/", description: "Find the maximum element in each sliding window." },
  { title: "First Negative Integer in Every Window", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k/1", description: "Find the first negative number in every window of size k." },
  { title: "Reveal Cards In Increasing Order", platform: "LeetCode", url: "https://leetcode.com/problems/reveal-cards-in-increasing-order/", description: "Arrange cards so revealing and skipping produces increasing order." }
],

// ==================== DAY 137 ====================
// Queue & Priority Concepts
137: [
  { title: "Kth Largest Element in a Stream", platform: "LeetCode", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", description: "Maintain the kth largest value as numbers are added." },
  { title: "Last Stone Weight", platform: "LeetCode", url: "https://leetcode.com/problems/last-stone-weight/", description: "Repeatedly smash the two heaviest stones using a max heap." },
  { title: "K Closest Points to Origin", platform: "LeetCode", url: "https://leetcode.com/problems/k-closest-points-to-origin/", description: "Find the k points with the smallest distance from the origin." }
],

// ==================== DAY 138 ====================
// Queue Problem Solving
138: [
  { title: "Rotting Oranges", platform: "LeetCode", url: "https://leetcode.com/problems/rotting-oranges/", description: "Use multi-source BFS to determine how long oranges take to rot." },
  { title: "01 Matrix", platform: "LeetCode", url: "https://leetcode.com/problems/01-matrix/", description: "Find each cell's shortest distance to a zero." },
  { title: "Open the Lock", platform: "LeetCode", url: "https://leetcode.com/problems/open-the-lock/", description: "Find the minimum turns to unlock a combination lock using BFS." }
],

// ==================== DAY 139 ====================
// Mixed Queue Practice
139: [
  { title: "Perfect Squares", platform: "LeetCode", url: "https://leetcode.com/problems/perfect-squares/", description: "Find the minimum number of perfect squares summing to n." },
  { title: "Snakes and Ladders", platform: "LeetCode", url: "https://leetcode.com/problems/snakes-and-ladders/", description: "Find the minimum dice rolls to reach the final board square." },
  { title: "Shortest Path in Binary Matrix", platform: "LeetCode", url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/", description: "Find the shortest clear path from top-left to bottom-right." }
],

// ==================== DAY 140 ====================
// Queue Revision
140: [
  { title: "Implement Queue using Stacks", platform: "LeetCode", url: "https://leetcode.com/problems/implement-queue-using-stacks/", description: "Review FIFO implementation using two stacks." },
  { title: "Design Circular Queue", platform: "LeetCode", url: "https://leetcode.com/problems/design-circular-queue/", description: "Review queue design with circular indexing." },
  { title: "Rotting Oranges", platform: "LeetCode", url: "https://leetcode.com/problems/rotting-oranges/", description: "Review multi-source BFS and queue-based simulation." }
],

// ==================== DAY 141 ====================
// Linked List Basics
141: [
  { title: "Middle of the Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/middle-of-the-linked-list/", description: "Find the middle node using slow and fast pointers." },
  { title: "Linked List Insertion", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/linked-list-insertion- at-end/1", description: "Insert a node into a linked list." },
  { title: "Remove Linked List Elements", platform: "LeetCode", url: "https://leetcode.com/problems/remove-linked-list-elements/", description: "Remove all nodes containing a specified value." }
],

// ==================== DAY 142 ====================
// Linked List Traversal
142: [
  { title: "Linked List Cycle", platform: "LeetCode", url: "https://leetcode.com/problems/linked-list-cycle/", description: "Detect whether a linked list contains a cycle." },
  { title: "Search in Linked List", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/search-in-linked-list/1", description: "Search for a value by traversing the linked list." },
  { title: "Delete Node in a Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/delete-node-in-a-linked-list/", description: "Delete a node when only that node is provided." }
],

// ==================== DAY 143 ====================
// Reversal Basics
143: [
  { title: "Reverse Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-linked-list/", description: "Reverse a singly linked list iteratively or recursively." },
  { title: "Reverse Linked List II", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-linked-list-ii/", description: "Reverse a specified section of a linked list." },
  { title: "Palindrome Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/palindrome-linked-list/", description: "Check whether the linked list reads the same forward and backward." }
],

// ==================== DAY 144 ====================
// Fast & Slow Pointers
144: [
  { title: "Linked List Cycle II", platform: "LeetCode", url: "https://leetcode.com/problems/linked-list-cycle-ii/", description: "Find the node where a linked list cycle begins." },
  { title: "Remove Nth Node From End of List", platform: "LeetCode", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", description: "Remove the nth node from the end in one pass." },
  { title: "Happy Number", platform: "LeetCode", url: "https://leetcode.com/problems/happy-number/", description: "Determine whether repeated digit-square sums reach one." }
],

// ==================== DAY 145 ====================
// Linked List Merge
145: [
  { title: "Merge Two Sorted Lists", platform: "LeetCode", url: "https://leetcode.com/problems/merge-two-sorted-lists/", description: "Merge two sorted linked lists into one sorted list." },
  { title: "Merge in Between Linked Lists", platform: "LeetCode", url: "https://leetcode.com/problems/merge-in-between-linked-lists/", description: "Replace a segment of one list with another linked list." },
  { title: "Add Two Numbers", platform: "LeetCode", url: "https://leetcode.com/problems/add-two-numbers/", description: "Add two numbers represented by reversed linked lists." }
],

// ==================== DAY 146 ====================
// Linked List Structure
146: [
  { title: "Intersection of Two Linked Lists", platform: "LeetCode", url: "https://leetcode.com/problems/intersection-of-two-linked-lists/", description: "Find the node where two linked lists intersect." },
  { title: "Odd Even Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/odd-even-linked-list/", description: "Group nodes at odd indices before even indices." },
  { title: "Swap Nodes in Pairs", platform: "LeetCode", url: "https://leetcode.com/problems/swap-nodes-in-pairs/", description: "Swap every two adjacent nodes without changing their values." }
],

// ==================== DAY 147 ====================
// Doubly Linked List
147: [
  { title: "Design Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/design-linked-list/", description: "Design a linked list supporting insertion, deletion, and retrieval." },
  { title: "Flatten a Multilevel Doubly Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/", description: "Flatten nested child lists into a single doubly linked list." },
  { title: "LRU Cache", platform: "LeetCode", url: "https://leetcode.com/problems/lru-cache/", description: "Design a least-recently-used cache with constant-time operations." }
],

// ==================== DAY 148 ====================
// Linked List Sorting
148: [
  { title: "Sort List", platform: "LeetCode", url: "https://leetcode.com/problems/sort-list/", description: "Sort a linked list in O(n log n) time." },
  { title: "Insertion Sort List", platform: "LeetCode", url: "https://leetcode.com/problems/insertion-sort-list/", description: "Sort a linked list using insertion sort." },
  { title: "Reorder List", platform: "LeetCode", url: "https://leetcode.com/problems/reorder-list/", description: "Reorder nodes alternately from the beginning and end." }
],

// ==================== DAY 149 ====================
// Linked List Advanced Practice
149: [
  { title: "Rotate List", platform: "LeetCode", url: "https://leetcode.com/problems/rotate-list/", description: "Rotate a linked list to the right by k positions." },
  { title: "Reverse Nodes in k-Group", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", description: "Reverse nodes in groups of k while preserving incomplete groups." },
  { title: "Copy List with Random Pointer", platform: "LeetCode", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", description: "Create a deep copy of a list with next and random pointers." }
],

// ==================== DAY 150 ====================
// Linked List Revision
150: [
  { title: "Middle of the Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/middle-of-the-linked-list/", description: "Revise finding the middle node with two pointers." },
  { title: "Reverse Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-linked-list/", description: "Revise linked list reversal." },
  { title: "Linked List Cycle", platform: "LeetCode", url: "https://leetcode.com/problems/linked-list-cycle/", description: "Revise cycle detection using Floyd's algorithm." }
],

// ==================== DAY 151 ====================
// Fixed Window Basics
151: [
  { title: "Maximum Average Subarray I", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-average-subarray-i/", description: "Find the maximum average of any contiguous subarray of length k." },
  { title: "Number of Sub-arrays of Size K and Average ≥ Threshold", platform: "LeetCode", url: "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/", description: "Count length-k windows whose average meets a threshold." },
  { title: "Minimum Sum Subarray of Size K", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/minimum-sum-subarray-of-size-k/1", description: "Find the minimum sum among contiguous subarrays of size k." }
],

// ==================== DAY 152 ====================
// Fixed Window Counting
152: [
  { title: "Find All Anagrams in a String", platform: "LeetCode", url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", description: "Find starting indices of anagrams of p in s." },
  { title: "Permutation in String", platform: "LeetCode", url: "https://leetcode.com/problems/permutation-in-string/", description: "Check whether s2 contains a permutation of s1." },
  { title: "Grumpy Bookstore Owner", platform: "LeetCode", url: "https://leetcode.com/problems/grumpy-bookstore-owner/", description: "Maximize satisfied customers using a fixed-length window." }
],

// ==================== DAY 153 ====================
// Variable Window Basics
153: [
  { title: "Minimum Size Subarray Sum", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-size-subarray-sum/", description: "Find the shortest subarray with sum at least target." },
  { title: "Longest Subarray of 1s After Deleting One Element", platform: "LeetCode", url: "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/", description: "Find the longest run of ones after deleting one element." },
  { title: "Max Consecutive Ones III", platform: "LeetCode", url: "https://leetcode.com/problems/max-consecutive-ones-iii/", description: "Find the longest subarray of ones after flipping at most k zeros." }
],

// ==================== DAY 154 ====================
// Sliding Window on Strings
154: [
  { title: "Longest Substring Without Repeating Characters", platform: "LeetCode", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", description: "Find the longest substring with all distinct characters." },
  { title: "Longest Repeating Character Replacement", platform: "LeetCode", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", description: "Find the longest substring achievable by replacing at most k characters." },
  { title: "Maximum Number of Vowels in a Substring of Given Length", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/", description: "Find the maximum vowel count in a substring of length k." }
],

// ==================== DAY 155 ====================
// Sliding Window on Arrays
155: [
  { title: "Fruit Into Baskets", platform: "LeetCode", url: "https://leetcode.com/problems/fruit-into-baskets/", description: "Find the longest subarray containing at most two distinct values." },
  { title: "Subarray Product Less Than K", platform: "LeetCode", url: "https://leetcode.com/problems/subarray-product-less-than-k/", description: "Count contiguous subarrays whose product is less than k." },
  { title: "Binary Subarrays With Sum", platform: "LeetCode", url: "https://leetcode.com/problems/binary-subarrays-with-sum/", description: "Count binary subarrays with a sum equal to goal." }
],

// ==================== DAY 156 ====================
// Window + Hashing
156: [
  { title: "Count Number of Nice Subarrays", platform: "LeetCode", url: "https://leetcode.com/problems/count-number-of-nice-subarrays/", description: "Count subarrays containing exactly k odd numbers." },
  { title: "Contains Duplicate II", platform: "LeetCode", url: "https://leetcode.com/problems/contains-duplicate-ii/", description: "Check for equal values whose indices differ by at most k." },
  { title: "Frequency of the Most Frequent Element", platform: "LeetCode", url: "https://leetcode.com/problems/frequency-of-the-most-frequent-element/", description: "Maximize element frequency using at most k increments." }
],

// ==================== DAY 157 ====================
// Window Optimization
157: [
  { title: "Minimum Window Substring", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-window-substring/", description: "Find the smallest substring containing all characters of t." },
  { title: "Sliding Window Maximum", platform: "LeetCode", url: "https://leetcode.com/problems/sliding-window-maximum/", description: "Find the maximum value in each window using a deque." },
  { title: "Longest Substring with At Most K Distinct Characters", platform: "LeetCode", url: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/", description: "Find the longest substring with no more than k distinct characters." }
],

// ==================== DAY 158 ====================
// Mixed Sliding Window
158: [
  { title: "Longest Continuous Subarray With Absolute Diff ≤ Limit", platform: "LeetCode", url: "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/", description: "Find the longest window whose max-min difference is within limit." },
  { title: "Minimum Operations to Reduce X to Zero", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/", description: "Remove elements from the ends to reduce x to zero." },
  { title: "Take K of Each Character From Left and Right", platform: "LeetCode", url: "https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/", description: "Take minimum characters from both ends to collect k of each type." }
],

// ==================== DAY 159 ====================
// Sliding Window Practice
159: [
  { title: "Maximize the Confusion of an Exam", platform: "LeetCode", url: "https://leetcode.com/problems/maximize-the-confusion-of-an-exam/", description: "Find the longest same-answer substring after at most k flips." },
  { title: "Maximum Erasure Value", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-erasure-value/", description: "Find the maximum-sum subarray with all unique elements." },
  { title: "Maximum Points You Can Obtain from Cards", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/", description: "Maximize score by taking k cards from either end." }
],

// ==================== DAY 160 ====================
// Sliding Window Revision
160: [
  { title: "Maximum Average Subarray I", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-average-subarray-i/", description: "Revise fixed-size window sum and average." },
  { title: "Longest Substring Without Repeating Characters", platform: "LeetCode", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", description: "Revise variable-size window with character tracking." },
  { title: "Minimum Size Subarray Sum", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-size-subarray-sum/", description: "Revise shrinking-window technique for minimum length." }
],

// ==================== DAY 161 ====================
// Greedy Fundamentals
161: [
  { title: "Assign Cookies", platform: "LeetCode", url: "https://leetcode.com/problems/assign-cookies/", description: "Assign cookies to maximize the number of satisfied children." },
  { title: "Lemonade Change", platform: "LeetCode", url: "https://leetcode.com/problems/lemonade-change/", description: "Determine whether correct change can be provided to every customer." },
  { title: "Twins", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/160/A", description: "Choose the fewest coins whose sum exceeds the remaining coins." }
],

// ==================== DAY 162 ====================
// Greedy on Arrays
162: [
  { title: "Best Time to Buy and Sell Stock II", platform: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", description: "Maximize profit with multiple stock transactions." },
  { title: "Can Place Flowers", platform: "LeetCode", url: "https://leetcode.com/problems/can-place-flowers/", description: "Check if n flowers can be planted without adjacent flowers." },
  { title: "Presents", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/136/A", description: "Invert a mapping to determine who gave each person a present." }
],

// ==================== DAY 163 ====================
// Greedy & Sorting
163: [
  { title: "Minimum Number of Arrows to Burst Balloons", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", description: "Find the minimum arrows needed to burst all interval balloons." },
  { title: "Non-overlapping Intervals", platform: "LeetCode", url: "https://leetcode.com/problems/non-overlapping-intervals/", description: "Remove the minimum intervals to eliminate all overlaps." },
  { title: "Dragons", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/230/A", description: "Determine whether a character can defeat dragons and gain strength." }
],

// ==================== DAY 164 ====================
// Greedy String Problems
164: [
  { title: "Remove Duplicate Letters", platform: "LeetCode", url: "https://leetcode.com/problems/remove-duplicate-letters/", description: "Create the lexicographically smallest string containing each letter once." },
  { title: "Partition Labels", platform: "LeetCode", url: "https://leetcode.com/problems/partition-labels/", description: "Partition a string so each character appears in only one part." },
  { title: "String Task", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/118/A", description: "Remove vowels and transform remaining letters into a formatted string." }
],

// ==================== DAY 165 ====================
// Greedy Scheduling
165: [
  { title: "Maximum Length of Pair Chain", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-length-of-pair-chain/", description: "Find the longest chain of pairs using greedy interval selection." },
  { title: "Activity Selection Problem", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/activity-selection-1587115620/1", description: "Select the maximum number of non-overlapping activities." },
  { title: "Business Trip", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/149/A", description: "Find the minimum months needed to reach a required growth amount." }
],

// ==================== DAY 166 ====================
// Greedy Optimization
166: [
  { title: "Jump Game", platform: "LeetCode", url: "https://leetcode.com/problems/jump-game/", description: "Determine whether the last index is reachable." },
  { title: "Jump Game II", platform: "LeetCode", url: "https://leetcode.com/problems/jump-game-ii/", description: "Find the minimum jumps required to reach the last index." },
  { title: "Buy a Shovel", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/ buys/Buy-a-Shovel", description: "Find the smallest number of shovels payable with a 10-unit or 0-unit final digit." }
],

// ==================== DAY 167 ====================
// Greedy with Intervals
167: [
  { title: "Insert Interval", platform: "LeetCode", url: "https://leetcode.com/problems/insert-interval/", description: "Insert an interval into sorted intervals and merge overlaps." },
  { title: "Merge Intervals", platform: "LeetCode", url: "https://leetcode.com/problems/merge-intervals/", description: "Merge all overlapping intervals." },
  { title: "Helpful Maths", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/339/A", description: "Rearrange summands in increasing order." }
],

// ==================== DAY 168 ====================
// Greedy on Numbers
168: [
  { title: "Gas Station", platform: "LeetCode", url: "https://leetcode.com/problems/gas-station/", description: "Find a starting station to complete a circular route." },
  { title: "Minimum Coins", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/-minimum-number-of-coins/1", description: "Find the minimum number of coins needed for a value." },
  { title: "I Wanna Be the Guy", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/469/A", description: "Check whether two players together can complete every level." }
],

// ==================== DAY 169 ====================
// Greedy Mixed Practice
169: [
  { title: "Task Scheduler", platform: "LeetCode", url: "https://leetcode.com/problems/task-scheduler/", description: "Schedule tasks with cooldowns to minimize total intervals." },
  { title: "Minimum Number of Platforms", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/minimum-number-of-platforms-1587115620/1", description: "Find the minimum railway platforms required for trains." },
  { title: "Vanya and Fence", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/677/A", description: "Calculate the road width needed based on friends' heights." }
],

// ==================== DAY 170 ====================
// Greedy Revision
170: [
  { title: "Assign Cookies", platform: "LeetCode", url: "https://leetcode.com/problems/assign-cookies/", description: "Revise greedy matching after sorting greed and cookie sizes." },
  { title: "Jump Game", platform: "LeetCode", url: "https://leetcode.com/problems/jump-game/", description: "Revise greedy tracking of the farthest reachable index." },
  { title: "Lemonade Change", platform: "LeetCode", url: "https://leetcode.com/problems/lemonade-change/", description: "Revise greedy cash change management." }
],
// ==================== DAY 171 ====================
// Tree Basics
171: [
  { title: "Maximum Depth of Binary Tree", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", description: "Find the maximum number of nodes along a root-to-leaf path." },
  { title: "Same Tree", platform: "LeetCode", url: "https://leetcode.com/problems/same-tree/", description: "Check whether two binary trees have identical structure and values." },
  { title: "Invert Binary Tree", platform: "LeetCode", url: "https://leetcode.com/problems/invert-binary-tree/", description: "Swap the left and right children of every tree node." }
],

// ==================== DAY 172 ====================
// Tree Traversal
172: [
  { title: "Binary Tree Preorder Traversal", platform: "LeetCode", url: "https://leetcode.com/problems/binary-tree-preorder-traversal/", description: "Traverse nodes in root-left-right order." },
  { title: "Binary Tree Inorder Traversal", platform: "LeetCode", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/", description: "Traverse nodes in left-root-right order." },
  { title: "Binary Tree Postorder Traversal", platform: "LeetCode", url: "https://leetcode.com/problems/binary-tree-postorder-traversal/", description: "Traverse nodes in left-right-root order." }
],

// ==================== DAY 173 ====================
// Level Order Traversal
173: [
  { title: "Binary Tree Level Order Traversal", platform: "LeetCode", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", description: "Return nodes grouped by tree level using BFS." },
  { title: "Binary Tree Right Side View", platform: "LeetCode", url: "https://leetcode.com/problems/binary-tree-right-side-view/", description: "Find the rightmost visible node at each level." },
  { title: "Average of Levels in Binary Tree", platform: "LeetCode", url: "https://leetcode.com/problems/average-of-levels-in-binary-tree/", description: "Compute the average node value for every level." }
],

// ==================== DAY 174 ====================
// Tree Properties
174: [
  { title: "Balanced Binary Tree", platform: "LeetCode", url: "https://leetcode.com/problems/balanced-binary-tree/", description: "Check whether subtree heights differ by at most one." },
  { title: "Diameter of Binary Tree", platform: "LeetCode", url: "https://leetcode.com/problems/diameter-of-binary-tree/", description: "Find the longest path between any two nodes." },
  { title: "Symmetric Tree", platform: "LeetCode", url: "https://leetcode.com/problems/symmetric-tree/", description: "Check whether a binary tree is a mirror of itself." }
],

// ==================== DAY 175 ====================
// Tree Path Problems
175: [
  { title: "Path Sum", platform: "LeetCode", url: "https://leetcode.com/problems/path-sum/", description: "Determine whether a root-to-leaf path equals the target sum." },
  { title: "Path Sum II", platform: "LeetCode", url: "https://leetcode.com/problems/path-sum-ii/", description: "Find all root-to-leaf paths matching a target sum." },
  { title: "Sum Root to Leaf Numbers", platform: "LeetCode", url: "https://leetcode.com/problems/sum-root-to-leaf-numbers/", description: "Sum numbers formed by root-to-leaf digit paths." }
],

// ==================== DAY 176 ====================
// Tree Construction
176: [
  { title: "Construct Binary Tree from Preorder and Inorder Traversal", platform: "LeetCode", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", description: "Reconstruct a binary tree from preorder and inorder arrays." },
  { title: "Construct Binary Tree from Inorder and Postorder Traversal", platform: "LeetCode", url: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", description: "Reconstruct a binary tree from inorder and postorder arrays." },
  { title: "Convert Sorted Array to Binary Search Tree", platform: "LeetCode", url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", description: "Build a height-balanced BST from a sorted array." }
],

// ==================== DAY 177 ====================
// Tree Views
177: [
  { title: "Binary Tree Zigzag Level Order Traversal", platform: "LeetCode", url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", description: "Traverse levels alternately from left to right and right to left." },
  { title: "Find Bottom Left Tree Value", platform: "LeetCode", url: "https://leetcode.com/problems/find-bottom-left-tree-value/", description: "Find the leftmost value at the deepest level." },
  { title: "Vertical Order Traversal of a Binary Tree", platform: "LeetCode", url: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", description: "Group nodes by vertical columns with specified ordering." }
],

// ==================== DAY 178 ====================
// Binary Search Tree Basics
178: [
  { title: "Search in a Binary Search Tree", platform: "LeetCode", url: "https://leetcode.com/problems/search-in-a-binary-search-tree/", description: "Find a node with the target value in a BST." },
  { title: "Insert into a Binary Search Tree", platform: "LeetCode", url: "https://leetcode.com/problems/insert-into-a-binary-search-tree/", description: "Insert a value while preserving BST properties." },
  { title: "Minimum Absolute Difference in BST", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-absolute-difference-in-bst/", description: "Find the minimum difference between any two node values." }
],

// ==================== DAY 179 ====================
// BST Problems
179: [
  { title: "Validate Binary Search Tree", platform: "LeetCode", url: "https://leetcode.com/problems/validate-binary-search-tree/", description: "Verify that all nodes satisfy BST ordering constraints." },
  { title: "Lowest Common Ancestor of a BST", platform: "LeetCode", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", description: "Find the lowest common ancestor of two BST nodes." },
  { title: "Kth Smallest Element in a BST", platform: "LeetCode", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", description: "Find the kth smallest value in a BST." }
],

// ==================== DAY 180 ====================
// Tree Revision
180: [
  { title: "Maximum Depth of Binary Tree", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", description: "Revise recursive depth calculation." },
  { title: "Diameter of Binary Tree", platform: "LeetCode", url: "https://leetcode.com/problems/diameter-of-binary-tree/", description: "Revise subtree heights and longest-path calculation." },
  { title: "Binary Tree Level Order Traversal", platform: "LeetCode", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", description: "Revise queue-based BFS traversal." }
],

// ==================== DAY 181 ====================
// Graph Basics
181: [
  { title: "Find if Path Exists in Graph", platform: "LeetCode", url: "https://leetcode.com/problems/find-if-path-exists-in-graph/", description: "Determine whether a path connects source and destination." },
  { title: "Number of Provinces", platform: "LeetCode", url: "https://leetcode.com/problems/number-of-provinces/", description: "Count connected components in an adjacency matrix." },
  { title: "DFS of Graph", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1", description: "Perform depth-first traversal of a graph." }
],

// ==================== DAY 182 ====================
// BFS Fundamentals
182: [
  { title: "BFS of Graph", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1", description: "Traverse graph vertices level by level using a queue." },
  { title: "Shortest Path in Binary Matrix", platform: "LeetCode", url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/", description: "Find the shortest clear path in a binary grid." },
  { title: "Two Buttons", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/520/A", description: "Find the minimum operations to transform n into m using multiply-by-two and subtract-one." }
],

// ==================== DAY 183 ====================
// DFS Applications
183: [
  { title: "Number of Islands", platform: "LeetCode", url: "https://leetcode.com/problems/number-of-islands/", description: "Count islands formed by connected land cells." },
  { title: "Max Area of Island", platform: "LeetCode", url: "https://leetcode.com/problems/max-area-of-island/", description: "Find the largest connected area of land." },
  { title: "Flood Fill", platform: "LeetCode", url: "https://leetcode.com/problems/flood-fill/", description: "Recolor a connected region starting from a pixel." }
],

// ==================== DAY 184 ====================
// Connected Components
184: [
  { title: "Number of Connected Components in an Undirected Graph", platform: "LeetCode", url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", description: "Count connected components in an undirected graph." },
  { title: "Number of Provinces", platform: "LeetCode", url: "https://leetcode.com/problems/number-of-provinces/", description: "Count groups of mutually connected cities." },
  { title: "Kefa and Park", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/580/A", description: "Count restaurant paths in a tree subject to consecutive cat limits." }
],

// ==================== DAY 185 ====================
// Graph Cycle Detection
185: [
  { title: "Detect Cycle in an Undirected Graph", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1", description: "Detect a cycle in an undirected graph using DFS or DSU." },
  { title: "Detect Cycle in a Directed Graph", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1", description: "Detect cycles in a directed graph using DFS states." },
  { title: "Course Schedule", platform: "LeetCode", url: "https://leetcode.com/problems/course-schedule/", description: "Check whether all courses can be completed without prerequisite cycles." }
],

// ==================== DAY 186 ====================
// Topological Sorting
186: [
  { title: "Course Schedule II", platform: "LeetCode", url: "https://leetcode.com/problems/course-schedule-ii/", description: "Return a valid course ordering using topological sorting." },
  { title: "Find Eventual Safe States", platform: "LeetCode", url: "https://leetcode.com/problems/find-eventual-safe-states/", description: "Find nodes that cannot reach a directed cycle." },
  { title: "Alien Dictionary", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/alien-dictionary/1", description: "Infer character ordering from a sorted alien language dictionary." }
],

// ==================== DAY 187 ====================
// Shortest Path Basics
187: [
  { title: "Network Delay Time", platform: "LeetCode", url: "https://leetcode.com/problems/network-delay-time/", description: "Find the time for a signal to reach all nodes using shortest paths." },
  { title: "Path with Minimum Effort", platform: "LeetCode", url: "https://leetcode.com/problems/path-with-minimum-effort/", description: "Minimize the maximum height difference along a grid path." },
  { title: "Cheapest Flights Within K Stops", platform: "LeetCode", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", description: "Find the cheapest route with at most k stops." }
],

// ==================== DAY 188 ====================
// Graph Grid Problems
188: [
  { title: "Rotting Oranges", platform: "LeetCode", url: "https://leetcode.com/problems/rotting-oranges/", description: "Use multi-source BFS to calculate rotting time." },
  { title: "Surrounded Regions", platform: "LeetCode", url: "https://leetcode.com/problems/surrounded-regions/", description: "Capture regions of O cells not connected to the boundary." },
  { title: "Pacific Atlantic Water Flow", platform: "LeetCode", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", description: "Find cells from which water can flow to both oceans." }
],

// ==================== DAY 189 ====================
// Disjoint Set Union (DSU)
189: [
  { title: "Redundant Connection", platform: "LeetCode", url: "https://leetcode.com/problems/redundant-connection/", description: "Find an edge that creates a cycle in a tree-like graph." },
  { title: "Accounts Merge", platform: "LeetCode", url: "https://leetcode.com/problems/accounts-merge/", description: "Merge accounts sharing common email addresses using DSU." },
  { title: "Number of Operations to Make Network Connected", platform: "LeetCode", url: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/", description: "Find the minimum cable moves to connect all network nodes." }
],

// ==================== DAY 190 ====================
// Graph Revision
190: [
  { title: "Number of Islands", platform: "LeetCode", url: "https://leetcode.com/problems/number-of-islands/", description: "Revise grid-based DFS or BFS component counting." },
  { title: "Course Schedule", platform: "LeetCode", url: "https://leetcode.com/problems/course-schedule/", description: "Revise cycle detection and topological ordering." },
  { title: "Find if Path Exists in Graph", platform: "LeetCode", url: "https://leetcode.com/problems/find-if-path-exists-in-graph/", description: "Revise graph traversal for source-destination reachability." }
],

// ==================== DAY 191 ====================
// Heap Fundamentals
191: [
  { title: "Kth Largest Element in an Array", platform: "LeetCode", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", description: "Find the kth largest value using a heap or quickselect." },
  { title: "Last Stone Weight", platform: "LeetCode", url: "https://leetcode.com/problems/last-stone-weight/", description: "Repeatedly process the two heaviest stones using a max heap." },
  { title: "Kth Largest Element in a Stream", platform: "LeetCode", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", description: "Maintain the kth largest element as values arrive." }
],

// ==================== DAY 192 ====================
// Top K Problems
192: [
  { title: "Top K Frequent Elements", platform: "LeetCode", url: "https://leetcode.com/problems/top-k-frequent-elements/", description: "Return the k most frequent numbers in an array." },
  { title: "Top K Frequent Words", platform: "LeetCode", url: "https://leetcode.com/problems/top-k-frequent-words/", description: "Return the k most frequent words with lexicographic tie-breaking." },
  { title: "K Closest Points to Origin", platform: "LeetCode", url: "https://leetcode.com/problems/k-closest-points-to-origin/", description: "Find the k points nearest to the origin." }
],

// ==================== DAY 193 ====================
// Heap & Sorting
193: [
  { title: "Sort an Array", platform: "LeetCode", url: "https://leetcode.com/problems/sort-an-array/", description: "Sort an array efficiently using a sorting algorithm." },
  { title: "Sort Characters By Frequency", platform: "LeetCode", url: "https://leetcode.com/problems/sort-characters-by-frequency/", description: "Sort characters by descending frequency." },
  { title: "Find K Pairs with Smallest Sums", platform: "LeetCode", url: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", description: "Find k pairs with the smallest pair sums from two sorted arrays." }
],

// ==================== DAY 194 ====================
// Two Heaps
194: [
  { title: "Find Median from Data Stream", platform: "LeetCode", url: "https://leetcode.com/problems/find-median-from-data-stream/", description: "Maintain a running median using two heaps." },
  { title: "IPO", platform: "LeetCode", url: "https://leetcode.com/problems/ipo/", description: "Maximize capital by choosing projects within available funds." },
  { title: "Meeting Rooms III", platform: "LeetCode", url: "https://leetcode.com/problems/meeting-rooms-iii/", description: "Determine the most used meeting room using priority queues." }
],

// ==================== DAY 195 ====================
// Heap Applications
195: [
  { title: "Task Scheduler", platform: "LeetCode", url: "https://leetcode.com/problems/task-scheduler/", description: "Schedule tasks with cooldowns in minimum time." },
  { title: "Reorganize String", platform: "LeetCode", url: "https://leetcode.com/problems/reorganize-string/", description: "Rearrange characters so adjacent characters are different." },
  { title: "Distant Barcodes", platform: "LeetCode", url: "https://leetcode.com/problems/distant-barcodes/", description: "Rearrange barcodes so identical values are not adjacent." }
],

// ==================== DAY 196 ====================
// Heap on Arrays
196: [
  { title: "Find the Kth Largest Integer in the Array", platform: "LeetCode", url: "https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/", description: "Find the kth largest numeric string without integer overflow." },
  { title: "Smallest Range Covering Elements from K Lists", platform: "LeetCode", url: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/", description: "Find the smallest range containing an element from every list." },
  { title: "Merge K Sorted Lists", platform: "LeetCode", url: "https://leetcode.com/problems/merge-k-sorted-lists/", description: "Merge multiple sorted linked lists using a min heap." }
],

// ==================== DAY 197 ====================
// Heap & Greedy
197: [
  { title: "Minimum Cost to Connect Sticks", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/", description: "Minimize total joining cost by repeatedly merging the shortest sticks." },
  { title: "Furthest Building You Can Reach", platform: "LeetCode", url: "https://leetcode.com/problems/furthest-building-you-can-reach/", description: "Use bricks and ladders optimally to reach the farthest building." },
  { title: "Maximum Performance of a Team", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-performance-of-a-team/", description: "Maximize team performance using speed sums and efficiency." }
],

// ==================== DAY 198 ====================
// Heap Mixed Practice
198: [
  { title: "Kth Smallest Element in a Sorted Matrix", platform: "LeetCode", url: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/", description: "Find the kth smallest value in a row- and column-sorted matrix." },
  { title: "Kth Smallest Prime Fraction", platform: "LeetCode", url: "https://leetcode.com/problems/kth-smallest-prime-fraction/", description: "Find the kth smallest fraction formed from a sorted prime array." },
  { title: "Sliding Window Median", platform: "LeetCode", url: "https://leetcode.com/problems/sliding-window-median/", description: "Compute the median for each sliding window." }
],

// ==================== DAY 199 ====================
// Heap Optimization
199: [
  { title: "Super Ugly Number", platform: "LeetCode", url: "https://leetcode.com/problems/super-ugly-number/", description: "Find the nth number whose prime factors belong to a given list." },
  { title: "Ugly Number II", platform: "LeetCode", url: "https://leetcode.com/problems/ugly-number-ii/", description: "Find the nth positive number with prime factors only 2, 3, and 5." },
  { title: "Design Twitter", platform: "LeetCode", url: "https://leetcode.com/problems/design-twitter/", description: "Design a simplified Twitter feed using data structures." }
],

// ==================== DAY 200 ====================
// Heap Revision
200: [
  { title: "Kth Largest Element in an Array", platform: "LeetCode", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", description: "Revise kth selection using heap or quickselect." },
  { title: "Top K Frequent Elements", platform: "LeetCode", url: "https://leetcode.com/problems/top-k-frequent-elements/", description: "Revise frequency counting and top-k heap selection." },
  { title: "Find Median from Data Stream", platform: "LeetCode", url: "https://leetcode.com/problems/find-median-from-data-stream/", description: "Revise median maintenance using two heaps." }
],

// ==================== DAY 201 ====================
// Backtracking Basics
201: [
  { title: "Subsets", platform: "LeetCode", url: "https://leetcode.com/problems/subsets/", description: "Generate all subsets of a given array." },
  { title: "Permutations", platform: "LeetCode", url: "https://leetcode.com/problems/permutations/", description: "Generate every possible ordering of the array elements." },
  { title: "Combination Sum", platform: "LeetCode", url: "https://leetcode.com/problems/combination-sum/", description: "Find combinations summing to target with reusable candidates." }
],

// ==================== DAY 202 ====================
// Backtracking & Choices
202: [
  { title: "Letter Combinations of a Phone Number", platform: "LeetCode", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", description: "Generate all letter combinations for a digit string." },
  { title: "Combinations", platform: "LeetCode", url: "https://leetcode.com/problems/combinations/", description: "Generate all combinations of k numbers from 1 through n." },
  { title: "Generate Parentheses", platform: "LeetCode", url: "https://leetcode.com/problems/generate-parentheses/", description: "Generate all valid combinations of n pairs of parentheses." }
],

// ==================== DAY 203 ====================
// Backtracking Challenge
203: [
  { title: "Combination Sum II", platform: "LeetCode", url: "https://leetcode.com/problems/combination-sum-ii/", description: "Find unique combinations summing to target using each candidate once." },
  { title: "Word Search", platform: "LeetCode", url: "https://leetcode.com/problems/word-search/", description: "Determine whether a word exists as a path in a character grid." },
  { title: "N-Queens", platform: "LeetCode", url: "https://leetcode.com/problems/n-queens/", description: "Place n queens on a chessboard so none attack each other." },
  { title: "Sudoku Solver", platform: "LeetCode", url: "https://leetcode.com/problems/sudoku-solver/", description: "Fill a Sudoku board using backtracking and constraint checks." }
],
// ==================== PATTERN 22 — DYNAMIC PROGRAMMING FUNDAMENTALS ====================

// ==================== DAY 204 ====================
// 1D DP Basics
204: [
  { title: "Climbing Stairs", platform: "LeetCode", url: "https://leetcode.com/problems/climbing-stairs/", description: "Count ways to reach the top using 1 or 2 steps." },
  { title: "Fibonacci Number", platform: "LeetCode", url: "https://leetcode.com/problems/fibonacci-number/", description: "Compute the nth Fibonacci number." },
  { title: "Min Cost Climbing Stairs", platform: "LeetCode", url: "https://leetcode.com/problems/min-cost-climbing-stairs/", description: "Find the minimum cost to reach the top." }
],

// ==================== DAY 205 ====================
// DP on Arrays
205: [
  { title: "House Robber", platform: "LeetCode", url: "https://leetcode.com/problems/house-robber/", description: "Maximize stolen money without robbing adjacent houses." },
  { title: "House Robber II", platform: "LeetCode", url: "https://leetcode.com/problems/house-robber-ii/", description: "Rob houses arranged in a circle without adjacent robberies." },
  { title: "Maximum Subarray", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-subarray/", description: "Find the contiguous subarray with maximum sum." }
],

// ==================== DAY 206 ====================
// DP & Subsequence
206: [
  { title: "Longest Increasing Subsequence", platform: "LeetCode", url: "https://leetcode.com/problems/longest-increasing-subsequence/", description: "Find the length of the longest increasing subsequence." },
  { title: "Number of Longest Increasing Subsequence", platform: "LeetCode", url: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/", description: "Count all subsequences having maximum increasing length." },
  { title: "Russian Doll Envelopes", platform: "LeetCode", url: "https://leetcode.com/problems/russian-doll-envelopes/", description: "Find the maximum number of nested envelopes." }
],

// ==================== DAY 207 ====================
// DP on Strings
207: [
  { title: "Longest Common Subsequence", platform: "LeetCode", url: "https://leetcode.com/problems/longest-common-subsequence/", description: "Find the longest subsequence common to two strings." },
  { title: "Delete Operation for Two Strings", platform: "LeetCode", url: "https://leetcode.com/problems/delete-operation-for-two-strings/", description: "Find minimum deletions to make two strings equal." },
  { title: "Edit Distance", platform: "LeetCode", url: "https://leetcode.com/problems/edit-distance/", description: "Find minimum insertions, deletions, and replacements." }
],

// ==================== DAY 208 ====================
// DP & Grid
208: [
  { title: "Unique Paths", platform: "LeetCode", url: "https://leetcode.com/problems/unique-paths/", description: "Count paths from the top-left to bottom-right of a grid." },
  { title: "Unique Paths II", platform: "LeetCode", url: "https://leetcode.com/problems/unique-paths-ii/", description: "Count grid paths while avoiding obstacles." },
  { title: "Minimum Path Sum", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-path-sum/", description: "Find the minimum sum path through a grid." }
],

// ==================== DAY 209 ====================
// DP & Coin Change
209: [
  { title: "Coin Change", platform: "LeetCode", url: "https://leetcode.com/problems/coin-change/", description: "Find the fewest coins needed to form an amount." },
  { title: "Coin Change II", platform: "LeetCode", url: "https://leetcode.com/problems/coin-change-ii/", description: "Count combinations that form a given amount." },
  { title: "Perfect Squares", platform: "LeetCode", url: "https://leetcode.com/problems/perfect-squares/", description: "Represent a number using the fewest perfect squares." }
],

// ==================== DAY 210 ====================
// DP & Knapsack
210: [
  { title: "Partition Equal Subset Sum", platform: "LeetCode", url: "https://leetcode.com/problems/partition-equal-subset-sum/", description: "Determine if an array can be split into equal-sum subsets." },
  { title: "Target Sum", platform: "LeetCode", url: "https://leetcode.com/problems/target-sum/", description: "Count sign assignments that reach a target sum." },
  { title: "Ones and Zeroes", platform: "LeetCode", url: "https://leetcode.com/problems/ones-and-zeroes/", description: "Choose the largest subset within zero and one limits." }
],

// ==================== DAY 211 ====================
// DP & Subarrays
211: [
  { title: "Maximum Product Subarray", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-product-subarray/", description: "Find the contiguous subarray with maximum product." },
  { title: "Best Time to Buy and Sell Stock with Cooldown", platform: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", description: "Maximize stock profit with a cooldown after selling." },
  { title: "Decode Ways", platform: "LeetCode", url: "https://leetcode.com/problems/decode-ways/", description: "Count valid alphabet decodings of a digit string." }
],

// ==================== DAY 212 ====================
// DP Optimization
212: [
  { title: "Word Break", platform: "LeetCode", url: "https://leetcode.com/problems/word-break/", description: "Check if a string can be segmented using dictionary words." },
  { title: "Combination Sum IV", platform: "LeetCode", url: "https://leetcode.com/problems/combination-sum-iv/", description: "Count ordered combinations that sum to a target." },
  { title: "Integer Break", platform: "LeetCode", url: "https://leetcode.com/problems/integer-break/", description: "Maximize a product by splitting an integer." }
],

// ==================== DAY 213 ====================
// DP Revision
213: [
  { title: "Climbing Stairs", platform: "LeetCode", url: "https://leetcode.com/problems/climbing-stairs/", description: "Revise 1D DP recurrence for staircase paths." },
  { title: "House Robber", platform: "LeetCode", url: "https://leetcode.com/problems/house-robber/", description: "Revise maximum non-adjacent selection DP." },
  { title: "Coin Change", platform: "LeetCode", url: "https://leetcode.com/problems/coin-change/", description: "Revise minimum-coin dynamic programming." }
],

// ==================== PATTERN 23 — ADVANCED DYNAMIC PROGRAMMING ====================

// ==================== DAY 214 ====================
// Stock DP
214: [
  { title: "Best Time to Buy and Sell Stock III", platform: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/", description: "Maximize profit with at most two transactions." },
  { title: "Best Time to Buy and Sell Stock IV", platform: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", description: "Maximize profit with at most k transactions." },
  { title: "Best Time to Buy and Sell Stock with Transaction Fee", platform: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/", description: "Maximize stock profit while paying a transaction fee." }
],

// ==================== DAY 215 ====================
// Interval DP
215: [
  { title: "Minimum Cost to Cut a Stick", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", description: "Minimize total cost of cutting a stick at given positions." },
  { title: "Burst Balloons", platform: "LeetCode", url: "https://leetcode.com/problems/burst-balloons/", description: "Maximize coins by choosing an optimal balloon bursting order." },
  { title: "Strange Printer", platform: "LeetCode", url: "https://leetcode.com/problems/strange-printer/", description: "Find the minimum turns needed to print a string." }
],

// ==================== DAY 216 ====================
// DP on Trees
216: [
  { title: "House Robber III", platform: "LeetCode", url: "https://leetcode.com/problems/house-robber-iii/", description: "Maximize tree robbery without robbing parent and child." },
  { title: "Binary Tree Cameras", platform: "LeetCode", url: "https://leetcode.com/problems/binary-tree-cameras/", description: "Place the minimum cameras to monitor all tree nodes." },
  { title: "Maximum Sum BST in Binary Tree", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/", description: "Find the maximum-sum BST subtree in a binary tree." }
],

// ==================== DAY 217 ====================
// DP on Bitmask
217: [
  { title: "Shortest Path Visiting All Nodes", platform: "LeetCode", url: "https://leetcode.com/problems/shortest-path-visiting-all-nodes/", description: "Find the shortest walk visiting every graph node." },
  { title: "Partition to K Equal Sum Subsets", platform: "LeetCode", url: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/", description: "Partition an array into k equal-sum subsets." },
  { title: "Smallest Sufficient Team", platform: "LeetCode", url: "https://leetcode.com/problems/smallest-sufficient-team/", description: "Find the smallest team covering all required skills." }
],

// ==================== DAY 218 ====================
// DP on Graphs
218: [
  { title: "Cheapest Flights Within K Stops", platform: "LeetCode", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", description: "Find the cheapest route with at most k stops." },
  { title: "Longest Increasing Path in a Matrix", platform: "LeetCode", url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/", description: "Find the longest strictly increasing path in a matrix." },
  { title: "Minimum Cost to Make at Least One Valid Path in a Grid", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/", description: "Minimize direction changes to create a valid grid path." }
],

// ==================== DAY 219 ====================
// DP & Palindromes
219: [
  { title: "Longest Palindromic Subsequence", platform: "LeetCode", url: "https://leetcode.com/problems/longest-palindromic-subsequence/", description: "Find the longest palindromic subsequence length." },
  { title: "Palindrome Partitioning II", platform: "LeetCode", url: "https://leetcode.com/problems/palindrome-partitioning-ii/", description: "Find the minimum cuts for palindrome partitioning." },
  { title: "Palindromic Substrings", platform: "LeetCode", url: "https://leetcode.com/problems/palindromic-substrings/", description: "Count all palindromic substrings in a string." }
],

// ==================== DAY 220 ====================
// DP & Subsequences
220: [
  { title: "Maximum Length of Pair Chain", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-length-of-pair-chain/", description: "Find the longest chain of compatible pairs." },
  { title: "Wiggle Subsequence", platform: "LeetCode", url: "https://leetcode.com/problems/wiggle-subsequence/", description: "Find the longest subsequence with alternating differences." },
  { title: "Longest String Chain", platform: "LeetCode", url: "https://leetcode.com/problems/longest-string-chain/", description: "Find the longest chain formed by adding one character." }
],

// ==================== DAY 221 ====================
// DP on Grid
221: [
  { title: "Dungeon Game", platform: "LeetCode", url: "https://leetcode.com/problems/dungeon-game/", description: "Find the minimum initial health needed to reach the goal." },
  { title: "Cherry Pickup", platform: "LeetCode", url: "https://leetcode.com/problems/cherry-pickup/", description: "Maximize collected cherries along a round-trip path." },
  { title: "Maximal Square", platform: "LeetCode", url: "https://leetcode.com/problems/maximal-square/", description: "Find the largest square containing only ones." }
],

// ==================== DAY 222 ====================
// DP Optimization
222: [
  { title: "Super Egg Drop", platform: "LeetCode", url: "https://leetcode.com/problems/super-egg-drop/", description: "Minimize moves needed to determine the critical floor." },
  { title: "Frog Jump", platform: "LeetCode", url: "https://leetcode.com/problems/frog-jump/", description: "Determine if a frog can cross stones using variable jumps." },
  { title: "Minimum Difficulty of a Job Schedule", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/", description: "Minimize total difficulty across consecutive workdays." }
],

// ==================== DAY 223 ====================
// DP Revision
223: [
  { title: "Edit Distance", platform: "LeetCode", url: "https://leetcode.com/problems/edit-distance/", description: "Revise string transformation DP." },
  { title: "Longest Increasing Subsequence", platform: "LeetCode", url: "https://leetcode.com/problems/longest-increasing-subsequence/", description: "Revise LIS recurrence and optimization." },
  { title: "Burst Balloons", platform: "LeetCode", url: "https://leetcode.com/problems/burst-balloons/", description: "Revise interval DP and optimal substructure." }
], 
// ==================== PATTERN 24 — TRIE & PREFIX TREE ====================

// ==================== DAY 224 ====================
// Trie Basics
224: [
  { title: "Implement Trie (Prefix Tree)", platform: "LeetCode", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", description: "Implement insert, search, and prefix-search operations." },
  { title: "Search Suggestions System", platform: "LeetCode", url: "https://leetcode.com/problems/search-suggestions-system/", description: "Suggest matching products for each search prefix." },
  { title: "Longest Word in Dictionary", platform: "LeetCode", url: "https://leetcode.com/problems/longest-word-in-dictionary/", description: "Find the longest word buildable one character at a time." }
],

// ==================== DAY 225 ====================
// Trie Applications
225: [
  { title: "Replace Words", platform: "LeetCode", url: "https://leetcode.com/problems/replace-words/", description: "Replace words with their shortest dictionary root." },
  { title: "Map Sum Pairs", platform: "LeetCode", url: "https://leetcode.com/problems/map-sum-pairs/", description: "Store key-value pairs and calculate prefix sums." },
  { title: "Design Add and Search Words Data Structure", platform: "LeetCode", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", description: "Support word insertion and wildcard character searches." }
],

// ==================== DAY 226 ====================
// Trie + Strings
226: [
  { title: "Word Search II", platform: "LeetCode", url: "https://leetcode.com/problems/word-search-ii/", description: "Find dictionary words present in a character board." },
  { title: "Stream of Characters", platform: "LeetCode", url: "https://leetcode.com/problems/stream-of-characters/", description: "Check whether streamed suffixes match dictionary words." },
  { title: "Maximum XOR of Two Numbers in an Array", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", description: "Find the maximum XOR using a bitwise trie." }
],

// ==================== DAY 227 ====================
// Prefix Matching
227: [
  { title: "Prefix and Suffix Search", platform: "LeetCode", url: "https://leetcode.com/problems/prefix-and-suffix-search/", description: "Find the highest-index word matching a prefix and suffix." },
  { title: "Short Encoding of Words", platform: "LeetCode", url: "https://leetcode.com/problems/short-encoding-of-words/", description: "Minimize encoding length by sharing word suffixes." },
  { title: "Implement Trie", platform: "GFG", url: "https://www.geeksforgeeks.org/trie-insert-and-search/", description: "Implement a trie for efficient word and prefix queries." }
],

// ==================== DAY 228 ====================
// Trie + DFS
228: [
  { title: "Word Search", platform: "LeetCode", url: "https://leetcode.com/problems/word-search/", description: "Search for a word by traversing adjacent board cells." },
  { title: "Concatenated Words", platform: "LeetCode", url: "https://leetcode.com/problems/concatenated-words/", description: "Find words composed of at least two smaller dictionary words." },
  { title: "Word Break II", platform: "LeetCode", url: "https://leetcode.com/problems/word-break-ii/", description: "Generate all valid dictionary-based sentence segmentations." }
],

// ==================== DAY 229 ====================
// Trie + Bitwise
229: [
  { title: "Maximum XOR With an Element From Array", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/", description: "Answer constrained maximum-XOR queries using a trie." },
  { title: "Maximum XOR of Two Numbers in an Array", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", description: "Revise pairwise maximum XOR with bitwise trie." },
  { title: "Count Pairs With XOR in a Range", platform: "LeetCode", url: "https://leetcode.com/problems/count-pairs-with-xor-in-a-range/", description: "Count pairs whose XOR values fall within a range." }
],

// ==================== DAY 230 ====================
// Trie Mixed Practice
230: [
  { title: "Word Squares", platform: "LeetCode", url: "https://leetcode.com/problems/word-squares/", description: "Build word squares using prefix-based backtracking." },
  { title: "Palindrome Pairs", platform: "LeetCode", url: "https://leetcode.com/problems/palindrome-pairs/", description: "Find word pairs whose concatenation forms a palindrome." },
  { title: "Top K Frequent Words", platform: "LeetCode", url: "https://leetcode.com/problems/top-k-frequent-words/", description: "Return the most frequent words with lexical tie-breaking." }
],

// ==================== DAY 231 ====================
// Trie Optimization
231: [
  { title: "Design Search Autocomplete System", platform: "LeetCode", url: "https://leetcode.com/problems/design-search-autocomplete-system/", description: "Design a sentence autocomplete system using prefixes." },
  { title: "Find the Length of the Longest Common Prefix", platform: "LeetCode", url: "https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/", description: "Find the longest shared digit prefix across two arrays." },
  { title: "Longest Common Prefix", platform: "LeetCode", url: "https://leetcode.com/problems/longest-common-prefix/", description: "Find the common starting substring of all strings." }
],

// ==================== DAY 232 ====================
// Trie Advanced
232: [
  { title: "Word Break", platform: "LeetCode", url: "https://leetcode.com/problems/word-break/", description: "Determine if a string can be segmented into dictionary words." },
  { title: "Maximum Genetic Difference Query", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-genetic-difference-query/", description: "Answer maximum XOR queries along tree ancestor paths." },
  { title: "Sum of Prefix Scores of Strings", platform: "LeetCode", url: "https://leetcode.com/problems/sum-of-prefix-scores-of-strings/", description: "Sum occurrence counts of every prefix of each word." }
],

// ==================== DAY 233 ====================
// Trie Revision
233: [
  { title: "Implement Trie", platform: "LeetCode", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", description: "Revise trie insertion and prefix lookup." },
  { title: "Replace Words", platform: "LeetCode", url: "https://leetcode.com/problems/replace-words/", description: "Revise shortest-root replacement using a trie." },
  { title: "Word Search II", platform: "LeetCode", url: "https://leetcode.com/problems/word-search-ii/", description: "Revise trie-assisted DFS on a character grid." }
],

// ==================== PATTERN 25 — INTERVALS & SWEEP LINE ====================

// ==================== DAY 234 ====================
// Interval Basics
234: [
  { title: "Merge Intervals", platform: "LeetCode", url: "https://leetcode.com/problems/merge-intervals/", description: "Merge all overlapping intervals." },
  { title: "Insert Interval", platform: "LeetCode", url: "https://leetcode.com/problems/insert-interval/", description: "Insert an interval into a sorted non-overlapping list." },
  { title: "Meeting Rooms", platform: "LeetCode", url: "https://leetcode.com/problems/meeting-rooms/", description: "Determine whether a person can attend every meeting." }
],

// ==================== DAY 235 ====================
// Interval Scheduling
235: [
  { title: "Non-overlapping Intervals", platform: "LeetCode", url: "https://leetcode.com/problems/non-overlapping-intervals/", description: "Remove the minimum intervals to eliminate overlaps." },
  { title: "Meeting Rooms II", platform: "LeetCode", url: "https://leetcode.com/problems/meeting-rooms-ii/", description: "Find the minimum number of rooms needed for meetings." },
  { title: "Minimum Number of Arrows to Burst Balloons", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", description: "Find the minimum arrows needed to burst all balloons." }
],

// ==================== DAY 236 ====================
// Interval Coverage
236: [
  { title: "Remove Covered Intervals", platform: "LeetCode", url: "https://leetcode.com/problems/remove-covered-intervals/", description: "Count intervals not covered by another interval." },
  { title: "Minimum Interval to Include Each Query", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-interval-to-include-each-query/", description: "Find the smallest interval containing each query." },
  { title: "Summary Ranges", platform: "LeetCode", url: "https://leetcode.com/problems/summary-ranges/", description: "Summarize consecutive numbers into ranges." }
],

// ==================== DAY 237 ====================
// Interval Operations
237: [
  { title: "Interval List Intersections", platform: "LeetCode", url: "https://leetcode.com/problems/interval-list-intersections/", description: "Find intersections between two sorted interval lists." },
  { title: "Employee Free Time", platform: "LeetCode", url: "https://leetcode.com/problems/employee-free-time/", description: "Find common free time among employees." },
  { title: "My Calendar I", platform: "LeetCode", url: "https://leetcode.com/problems/my-calendar-i/", description: "Design a calendar that rejects overlapping bookings." }
],

// ==================== DAY 238 ====================
// Calendar Problems
238: [
  { title: "My Calendar II", platform: "LeetCode", url: "https://leetcode.com/problems/my-calendar-ii/", description: "Allow double bookings but reject triple bookings." },
  { title: "My Calendar III", platform: "LeetCode", url: "https://leetcode.com/problems/my-calendar-iii/", description: "Track the maximum number of simultaneous bookings." },
  { title: "Car Pooling", platform: "LeetCode", url: "https://leetcode.com/problems/car-pooling/", description: "Check if trip passenger capacity is ever exceeded." }
],

// ==================== DAY 239 ====================
// Sweep Line Intro
239: [
  { title: "The Skyline Problem", platform: "LeetCode", url: "https://leetcode.com/problems/the-skyline-problem/", description: "Compute the skyline formed by overlapping buildings." },
  { title: "Meeting Rooms III", platform: "LeetCode", url: "https://leetcode.com/problems/meeting-rooms-iii/", description: "Assign meetings to rooms and find the most-used room." },
  { title: "Maximum Population Year", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-population-year/", description: "Find the year with the maximum population." }
],

// ==================== DAY 240 ====================
// Interval & Sorting
240: [
  { title: "Minimum Number of Platforms", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/minimum-number-of-platforms-1587115620/1", description: "Find the minimum railway platforms needed for trains." },
  { title: "Merge Two Sorted Lists of Intervals", platform: "GFG", url: "https://www.geeksforgeeks.org/merging-intervals/", description: "Merge two sorted interval collections." },
  { title: "Divide Intervals Into Minimum Number of Groups", platform: "LeetCode", url: "https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/", description: "Partition intervals into the minimum non-overlapping groups." }
],

// ==================== DAY 241 ====================
// Interval Advanced
241: [
  { title: "Count Ways to Group Overlapping Ranges", platform: "LeetCode", url: "https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/", description: "Count ways to group ranges based on overlap connectivity." },
  { title: "Data Stream as Disjoint Intervals", platform: "LeetCode", url: "https://leetcode.com/problems/data-stream-as-disjoint-intervals/", description: "Maintain disjoint intervals as numbers arrive." },
  { title: "Range Module", platform: "LeetCode", url: "https://leetcode.com/problems/range-module/", description: "Track covered ranges with add, remove, and query operations." }
],

// ==================== DAY 242 ====================
// Interval Mixed
242: [
  { title: "Brightest Position on Street", platform: "LeetCode", url: "https://leetcode.com/problems/brightest-position-on-street/", description: "Find the position with maximum illumination." },
  { title: "Maximum Number of Events That Can Be Attended", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/", description: "Attend the maximum number of non-conflicting events." },
  { title: "Two Best Non-Overlapping Events", platform: "LeetCode", url: "https://leetcode.com/problems/two-best-non-overlapping-events/", description: "Maximize value by attending up to two non-overlapping events." }
],

// ==================== DAY 243 ====================
// Interval Revision
243: [
  { title: "Merge Intervals", platform: "LeetCode", url: "https://leetcode.com/problems/merge-intervals/", description: "Revise sorting and merging overlapping intervals." },
  { title: "Non-overlapping Intervals", platform: "LeetCode", url: "https://leetcode.com/problems/non-overlapping-intervals/", description: "Revise greedy interval scheduling." },
  { title: "Meeting Rooms II", platform: "LeetCode", url: "https://leetcode.com/problems/meeting-rooms-ii/", description: "Revise minimum room allocation using interval overlaps." }
],
// ==================== PATTERN 26 — ADVANCED BINARY SEARCH ====================

// ==================== DAY 244 ====================
// Binary Search on Answer
244: [
  { title: "Koko Eating Bananas", platform: "LeetCode", url: "https://leetcode.com/problems/koko-eating-bananas/", description: "Find the minimum eating speed to finish within h hours." },
  { title: "Capacity to Ship Packages Within D Days", platform: "LeetCode", url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", description: "Find the minimum ship capacity for a given deadline." },
  { title: "Minimum Number of Days to Make m Bouquets", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/", description: "Find the earliest day to make the required bouquets." }
],

// ==================== DAY 245 ====================
// Search in Rotated Arrays
245: [
  { title: "Search in Rotated Sorted Array", platform: "LeetCode", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", description: "Search in a rotated sorted array in logarithmic time." },
  { title: "Search in Rotated Sorted Array II", platform: "LeetCode", url: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/", description: "Search a rotated array that may contain duplicates." },
  { title: "Find Minimum in Rotated Sorted Array", platform: "LeetCode", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", description: "Find the minimum element in a rotated sorted array." }
],

// ==================== DAY 246 ====================
// Binary Search on Matrix
246: [
  { title: "Search a 2D Matrix", platform: "LeetCode", url: "https://leetcode.com/problems/search-a-2d-matrix/", description: "Search a matrix treated as a sorted one-dimensional array." },
  { title: "Search a 2D Matrix II", platform: "LeetCode", url: "https://leetcode.com/problems/search-a-2d-matrix-ii/", description: "Search a matrix sorted by rows and columns." },
  { title: "Kth Smallest Element in a Sorted Matrix", platform: "LeetCode", url: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/", description: "Find the kth smallest value in a row-column sorted matrix." }
],

// ==================== DAY 247 ====================
// Binary Search on Partition
247: [
  { title: "Median of Two Sorted Arrays", platform: "LeetCode", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", description: "Find the median using binary partitioning." },
  { title: "Split Array Largest Sum", platform: "LeetCode", url: "https://leetcode.com/problems/split-array-largest-sum/", description: "Minimize the largest subarray sum across m partitions." },
  { title: "Allocate Minimum Number of Pages", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1", description: "Allocate books to students while minimizing maximum pages." }
],

// ==================== DAY 248 ====================
// Binary Search on Values
248: [
  { title: "Find Peak Element", platform: "LeetCode", url: "https://leetcode.com/problems/find-peak-element/", description: "Find a peak element using binary search." },
  { title: "Find a Peak Element II", platform: "LeetCode", url: "https://leetcode.com/problems/find-a-peak-element-ii/", description: "Find a peak in a two-dimensional grid." },
  { title: "H-Index II", platform: "LeetCode", url: "https://leetcode.com/problems/h-index-ii/", description: "Compute the h-index from sorted citation counts." }
],

// ==================== DAY 249 ====================
// Binary Search + Greedy
249: [
  { title: "Magnetic Force Between Two Balls", platform: "LeetCode", url: "https://leetcode.com/problems/magnetic-force-between-two-balls/", description: "Maximize the minimum distance between placed balls." },
  { title: "Maximum Distance Between Two Arrays", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-distance-between-two-arrays/", description: "Find the maximum distance using values from different arrays." },
  { title: "Aggressive Cows", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/aggressive-cows/1", description: "Maximize the minimum distance between cows in stalls." }
],

// ==================== DAY 250 ====================
// Binary Search Advanced
250: [
  { title: "Find K-th Smallest Pair Distance", platform: "LeetCode", url: "https://leetcode.com/problems/find-k-th-smallest-pair-distance/", description: "Find the kth smallest pair distance using binary search." },
  { title: "Kth Smallest Number in Multiplication Table", platform: "LeetCode", url: "https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/", description: "Find the kth smallest value in a multiplication table." },
  { title: "Find the Median of a Row Wise Sorted Matrix", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix/1", description: "Find the median in a row-wise sorted matrix." }
],

// ==================== DAY 251 ====================
// Binary Search on Time
251: [
  { title: "Minimum Time to Complete Trips", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-time-to-complete-trips/", description: "Find the minimum time for buses to complete all trips." },
  { title: "Minimum Time to Repair Cars", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-time-to-repair-cars/", description: "Find the minimum time required to repair all cars." },
  { title: "Find the Smallest Divisor Given a Threshold", platform: "LeetCode", url: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/", description: "Find the smallest divisor satisfying a sum threshold." }
],

// ==================== DAY 252 ====================
// Binary Search Mixed
252: [
  { title: "Search Insert Position", platform: "LeetCode", url: "https://leetcode.com/problems/search-insert-position/", description: "Find the index or insertion position of a target." },
  { title: "Find First and Last Position of Element", platform: "LeetCode", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", description: "Find the first and last occurrence of a target." },
  { title: "Find K Closest Elements", platform: "LeetCode", url: "https://leetcode.com/problems/find-k-closest-elements/", description: "Find k elements closest to a target in a sorted array." }
],

// ==================== DAY 253 ====================
// Binary Search Revision
253: [
  { title: "Koko Eating Bananas", platform: "LeetCode", url: "https://leetcode.com/problems/koko-eating-bananas/", description: "Revise binary search on answer." },
  { title: "Search in Rotated Sorted Array", platform: "LeetCode", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", description: "Revise rotated-array binary search." },
  { title: "Median of Two Sorted Arrays", platform: "LeetCode", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", description: "Revise advanced binary partitioning." }
],

// ==================== PATTERN 27 — ADVANCED TWO POINTERS & SLIDING WINDOW ====================

// ==================== DAY 254 ====================
// Two Pointer Optimization
254: [
  { title: "3Sum", platform: "LeetCode", url: "https://leetcode.com/problems/3sum/", description: "Find unique triplets that sum to zero." },
  { title: "4Sum", platform: "LeetCode", url: "https://leetcode.com/problems/4sum/", description: "Find unique quadruplets that sum to a target." },
  { title: "Container With Most Water", platform: "LeetCode", url: "https://leetcode.com/problems/container-with-most-water/", description: "Maximize water capacity between two vertical lines." }
],

// ==================== DAY 255 ====================
// Two Pointers & Sorting
255: [
  { title: "3Sum Closest", platform: "LeetCode", url: "https://leetcode.com/problems/3sum-closest/", description: "Find a triplet sum closest to the target." },
  { title: "Boats to Save People", platform: "LeetCode", url: "https://leetcode.com/problems/boats-to-save-people/", description: "Minimize boats needed under a weight limit." },
  { title: "Remove Duplicates from Sorted Array II", platform: "LeetCode", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/", description: "Allow at most two occurrences of each value in-place." }
],

// ==================== DAY 256 ====================
// Advanced Sliding Window
256: [
  { title: "Longest Substring Without Repeating Characters", platform: "LeetCode", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", description: "Find the longest substring with unique characters." },
  { title: "Minimum Window Substring", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-window-substring/", description: "Find the smallest substring containing all target characters." },
  { title: "Substring with Concatenation of All Words", platform: "LeetCode", url: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/", description: "Find substrings containing all words in concatenated form." }
],

// ==================== DAY 257 ====================
// Window + Frequency
257: [
  { title: "Permutation in String", platform: "LeetCode", url: "https://leetcode.com/problems/permutation-in-string/", description: "Check if a substring is a permutation of another string." },
  { title: "Find All Anagrams in a String", platform: "LeetCode", url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", description: "Find starting indices of all anagram windows." },
  { title: "Longest Repeating Character Replacement", platform: "LeetCode", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", description: "Find the longest uniform substring after k replacements." }
],

// ==================== DAY 258 ====================
// Subarray Counting
258: [
  { title: "Subarray Sum Equals K", platform: "LeetCode", url: "https://leetcode.com/problems/subarray-sum-equals-k/", description: "Count subarrays whose sum equals k." },
  { title: "Count Number of Nice Subarrays", platform: "LeetCode", url: "https://leetcode.com/problems/count-number-of-nice-subarrays/", description: "Count subarrays containing exactly k odd numbers." },
  { title: "Binary Subarrays With Sum", platform: "LeetCode", url: "https://leetcode.com/problems/binary-subarrays-with-sum/", description: "Count binary subarrays having a target sum." }
],

// ==================== DAY 259 ====================
// Window + Deque
259: [
  { title: "Sliding Window Maximum", platform: "LeetCode", url: "https://leetcode.com/problems/sliding-window-maximum/", description: "Find the maximum in each sliding window." },
  { title: "Shortest Subarray with Sum at Least K", platform: "LeetCode", url: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/", description: "Find the shortest subarray meeting a sum threshold." },
  { title: "Continuous Subarrays", platform: "LeetCode", url: "https://leetcode.com/problems/continuous-subarrays/", description: "Count subarrays whose maximum and minimum differ by at most two." }
],

// ==================== DAY 260 ====================
// Advanced Subarray Problems
260: [
  { title: "Maximum Sum Circular Subarray", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-sum-circular-subarray/", description: "Find the maximum subarray sum in a circular array." },
  { title: "Maximum Subarray Min-Product", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-subarray-min-product/", description: "Maximize subarray sum multiplied by its minimum value." },
  { title: "Sum of Subarray Minimums", platform: "LeetCode", url: "https://leetcode.com/problems/sum-of-subarray-minimums/", description: "Sum minimum values across all subarrays." }
],

// ==================== DAY 261 ====================
// Two Pointers Mixed
261: [
  { title: "Trapping Rain Water", platform: "LeetCode", url: "https://leetcode.com/problems/trapping-rain-water/", description: "Calculate trapped rainwater between elevation bars." },
  { title: "Sort Colors", platform: "LeetCode", url: "https://leetcode.com/problems/sort-colors/", description: "Sort 0s, 1s, and 2s in a single pass." },
  { title: "Move Zeroes", platform: "LeetCode", url: "https://leetcode.com/problems/move-zeroes/", description: "Move zeros to the end while preserving order." }
],

// ==================== DAY 262 ====================
// Sliding Window Advanced
262: [
  { title: "Maximum Number of Vowels in a Substring", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/", description: "Find the maximum vowels in any substring of length k." },
  { title: "Max Consecutive Ones III", platform: "LeetCode", url: "https://leetcode.com/problems/max-consecutive-ones-iii/", description: "Find the longest ones segment after flipping at most k zeros." },
  { title: "Fruit Into Baskets", platform: "LeetCode", url: "https://leetcode.com/problems/fruit-into-baskets/", description: "Find the longest subarray containing at most two types." }
],

// ==================== DAY 263 ====================
// Sliding Window Revision
263: [
  { title: "3Sum", platform: "LeetCode", url: "https://leetcode.com/problems/3sum/", description: "Revise sorting with two-pointer triplet search." },
  { title: "Minimum Window Substring", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-window-substring/", description: "Revise frequency-map sliding window." },
  { title: "Trapping Rain Water", platform: "LeetCode", url: "https://leetcode.com/problems/trapping-rain-water/", description: "Revise two-pointer water accumulation." }
],
// ==================== PATTERN 28 — NUMBER THEORY & MATHEMATICAL ALGORITHMS ====================

// ==================== DAY 264 ====================
// Prime Numbers
264: [
  { title: "Count Primes", platform: "LeetCode", url: "https://leetcode.com/problems/count-primes/", description: "Count primes smaller than n using sieve techniques." },
  { title: "Prime Factorization", platform: "GFG", url: "https://www.geeksforgeeks.org/prime-factorization-using-sieve/", description: "Find the prime factorization of an integer." },
  { title: "Prime Factors", platform: "GFG", url: "https://www.geeksforgeeks.org/prime-factors/", description: "Determine the prime factors of a given number." }
],

// ==================== DAY 265 ====================
// GCD & LCM
265: [
  { title: "Greatest Common Divisor", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1", description: "Compute the greatest common divisor of two numbers." },
  { title: "LCM of Two Numbers", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1", description: "Compute the least common multiple of two numbers." },
  { title: "Common Divisors", platform: "GFG", url: "https://www.geeksforgeeks.org/common-divisors/", description: "Count divisors common to two integers." }
],

// ==================== DAY 266 ====================
// Modular Arithmetic
266: [
  { title: "Pow(x, n)", platform: "LeetCode", url: "https://leetcode.com/problems/powx-n/", description: "Compute x raised to n using fast exponentiation." },
  { title: "Super Pow", platform: "LeetCode", url: "https://leetcode.com/problems/super-pow/", description: "Calculate a large exponent modulo 1337." },
  { title: "Count Good Numbers", platform: "LeetCode", url: "https://leetcode.com/problems/count-good-numbers/", description: "Count valid digit strings using modular exponentiation." }
],

// ==================== DAY 267 ====================
// Sieve Problems
267: [
  { title: "Count Primes", platform: "LeetCode", url: "https://leetcode.com/problems/count-primes/", description: "Revise the Sieve of Eratosthenes." },
  { title: "Closest Prime Numbers in Range", platform: "LeetCode", url: "https://leetcode.com/problems/closest-prime-numbers-in-range/", description: "Find the closest pair of primes in a range." },
  { title: "Find the Smallest Divisor Given a Threshold", platform: "LeetCode", url: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/", description: "Find the smallest divisor satisfying a threshold condition." }
],

// ==================== DAY 268 ====================
// Combinatorics
268: [
  { title: "Pascal's Triangle", platform: "LeetCode", url: "https://leetcode.com/problems/pascals-triangle/", description: "Generate Pascal's triangle." },
  { title: "Pascal's Triangle II", platform: "LeetCode", url: "https://leetcode.com/problems/pascals-triangle-ii/", description: "Generate a specific row of Pascal's triangle." },
  { title: "Unique Paths", platform: "LeetCode", url: "https://leetcode.com/problems/unique-paths/", description: "Count grid paths using combinatorics or DP." }
],

// ==================== DAY 269 ====================
// Mathematical Greedy
269: [
  { title: "Integer Break", platform: "LeetCode", url: "https://leetcode.com/problems/integer-break/", description: "Maximize the product of integer partitions." },
  { title: "Bulb Switcher", platform: "LeetCode", url: "https://leetcode.com/problems/bulb-switcher/", description: "Determine how many bulbs remain on after toggling rounds." },
  { title: "Watermelon", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/4/A", description: "Determine whether a weight can be split into two positive even parts." }
],

// ==================== DAY 270 ====================
// Bitwise Mathematics
270: [
  { title: "Single Number", platform: "LeetCode", url: "https://leetcode.com/problems/single-number/", description: "Find the unique element using XOR." },
  { title: "Number of 1 Bits", platform: "LeetCode", url: "https://leetcode.com/problems/number-of-1-bits/", description: "Count set bits in an integer." },
  { title: "Sum of Two Integers", platform: "LeetCode", url: "https://leetcode.com/problems/sum-of-two-integers/", description: "Add integers using bitwise operations." }
],

// ==================== DAY 271 ====================
// Math & Geometry
271: [
  { title: "Rotate Image", platform: "LeetCode", url: "https://leetcode.com/problems/rotate-image/", description: "Rotate a square matrix 90 degrees clockwise." },
  { title: "Spiral Matrix", platform: "LeetCode", url: "https://leetcode.com/problems/spiral-matrix/", description: "Traverse a matrix in spiral order." },
  { title: "Max Points on a Line", platform: "LeetCode", url: "https://leetcode.com/problems/max-points-on-a-line/", description: "Find the maximum number of collinear points." }
],

// ==================== DAY 272 ====================
// Number Theory Mixed
272: [
  { title: "Happy Number", platform: "LeetCode", url: "https://leetcode.com/problems/happy-number/", description: "Determine if repeated digit-square sums reach one." },
  { title: "Ugly Number", platform: "LeetCode", url: "https://leetcode.com/problems/ugly-number/", description: "Check whether a number has only 2, 3, and 5 as prime factors." },
  { title: "Perfect Squares", platform: "LeetCode", url: "https://leetcode.com/problems/perfect-squares/", description: "Find the minimum number of perfect squares summing to n." }
],

// ==================== DAY 273 ====================
// Number Theory Revision
273: [
  { title: "Count Primes", platform: "LeetCode", url: "https://leetcode.com/problems/count-primes/", description: "Revise prime generation and sieve methods." },
  { title: "Pow(x, n)", platform: "LeetCode", url: "https://leetcode.com/problems/powx-n/", description: "Revise fast exponentiation." },
  { title: "Pascal's Triangle", platform: "LeetCode", url: "https://leetcode.com/problems/pascals-triangle/", description: "Revise combinatorial row generation." }
],

// ==================== PATTERN 29 — STRING ALGORITHMS & KMP ====================

// ==================== DAY 274 ====================
// String Matching
274: [
  { title: "Find the Index of the First Occurrence", platform: "LeetCode", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", description: "Find the first occurrence of a pattern in a string." },
  { title: "Repeated Substring Pattern", platform: "LeetCode", url: "https://leetcode.com/problems/repeated-substring-pattern/", description: "Determine if a string is formed by repeating a substring." },
  { title: "Longest Happy Prefix", platform: "LeetCode", url: "https://leetcode.com/problems/longest-happy-prefix/", description: "Find the longest proper prefix that is also a suffix." }
],

// ==================== DAY 275 ====================
// KMP Fundamentals
275: [
  { title: "Implement KMP Algorithm", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/search-pattern0205/1", description: "Implement KMP pattern matching with an LPS array." },
  { title: "Shortest Palindrome", platform: "LeetCode", url: "https://leetcode.com/problems/shortest-palindrome/", description: "Add the fewest characters to the front to form a palindrome." },
  { title: "Find All Occurrences of a Pattern", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/search-pattern0205/1", description: "Find all pattern occurrences in a text." }
],

// ==================== DAY 276 ====================
// Z Algorithm
276: [
  { title: "Z Algorithm", platform: "GFG", url: "https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/", description: "Compute the Z-array for efficient string matching." },
  { title: "Sum of Scores of Built Strings", platform: "LeetCode", url: "https://leetcode.com/problems/sum-of-scores-of-built-strings/", description: "Sum prefix-match scores using string preprocessing." },
  { title: "Find the Index of the First Occurrence", platform: "LeetCode", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", description: "Revise pattern matching in strings." }
],

// ==================== DAY 277 ====================
// Palindrome Algorithms
277: [
  { title: "Longest Palindromic Substring", platform: "LeetCode", url: "https://leetcode.com/problems/longest-palindromic-substring/", description: "Find the longest contiguous palindromic substring." },
  { title: "Palindrome Partitioning", platform: "LeetCode", url: "https://leetcode.com/problems/palindrome-partitioning/", description: "Generate all partitions containing palindrome substrings." },
  { title: "Palindrome Partitioning II", platform: "LeetCode", url: "https://leetcode.com/problems/palindrome-partitioning-ii/", description: "Minimize cuts needed for palindrome partitioning." }
],

// ==================== DAY 278 ====================
// String DP
278: [
  { title: "Longest Common Subsequence", platform: "LeetCode", url: "https://leetcode.com/problems/longest-common-subsequence/", description: "Find the longest common subsequence of two strings." },
  { title: "Edit Distance", platform: "LeetCode", url: "https://leetcode.com/problems/edit-distance/", description: "Find the minimum operations to transform one string into another." },
  { title: "Distinct Subsequences", platform: "LeetCode", url: "https://leetcode.com/problems/distinct-subsequences/", description: "Count subsequences of s that equal t." }
],

// ==================== DAY 279 ====================
// Advanced String Matching
279: [
  { title: "Wildcard Matching", platform: "LeetCode", url: "https://leetcode.com/problems/wildcard-matching/", description: "Match a string against wildcard patterns." },
  { title: "Regular Expression Matching", platform: "LeetCode", url: "https://leetcode.com/problems/regular-expression-matching/", description: "Match strings using dot and star regular expressions." },
  { title: "Word Break", platform: "LeetCode", url: "https://leetcode.com/problems/word-break/", description: "Check whether a string can be segmented into dictionary words." }
],

// ==================== DAY 280 ====================
// String Hashing
280: [
  { title: "Longest Duplicate Substring", platform: "LeetCode", url: "https://leetcode.com/problems/longest-duplicate-substring/", description: "Find the longest substring appearing at least twice." },
  { title: "Repeated DNA Sequences", platform: "LeetCode", url: "https://leetcode.com/problems/repeated-dna-sequences/", description: "Find repeated DNA sequences of length ten." },
  { title: "Find Duplicate Subtrees", platform: "LeetCode", url: "https://leetcode.com/problems/find-duplicate-subtrees/", description: "Identify duplicate subtrees using structural serialization." }
],

// ==================== DAY 281 ====================
// String Transformation
281: [
  { title: "Reverse Words in a String", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-words-in-a-string/", description: "Reverse word order while handling whitespace." },
  { title: "Group Anagrams", platform: "LeetCode", url: "https://leetcode.com/problems/group-anagrams/", description: "Group strings that are anagrams of each other." },
  { title: "Minimum Window Substring", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-window-substring/", description: "Find the minimum substring covering all target characters." }
],

// ==================== DAY 282 ====================
// String Advanced Practice
282: [
  { title: "Text Justification", platform: "LeetCode", url: "https://leetcode.com/problems/text-justification/", description: "Format words into fully justified text lines." },
  { title: "Basic Calculator", platform: "LeetCode", url: "https://leetcode.com/problems/basic-calculator/", description: "Evaluate an expression with parentheses and arithmetic signs." },
  { title: "Decode String", platform: "LeetCode", url: "https://leetcode.com/problems/decode-string/", description: "Decode nested repetition expressions." }
],

// ==================== DAY 283 ====================
// String Revision
283: [
  { title: "Longest Palindromic Substring", platform: "LeetCode", url: "https://leetcode.com/problems/longest-palindromic-substring/", description: "Revise palindrome expansion and string DP." },
  { title: "KMP Pattern Search", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/search-pattern0205/1", description: "Revise KMP preprocessing and pattern search." },
  { title: "Edit Distance", platform: "LeetCode", url: "https://leetcode.com/problems/edit-distance/", description: "Revise dynamic programming on strings." }
],
// ==================== PATTERN 30 — ADVANCED GRAPH ALGORITHMS ====================

// ==================== DAY 284 ====================
// Dijkstra
284: [
  { title: "Network Delay Time", platform: "LeetCode", url: "https://leetcode.com/problems/network-delay-time/", description: "Find the time for a signal to reach all graph nodes." },
  { title: "Path With Minimum Effort", platform: "LeetCode", url: "https://leetcode.com/problems/path-with-minimum-effort/", description: "Minimize the maximum height difference along a path." },
  { title: "Minimum Cost to Make at Least One Valid Path in a Grid", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/", description: "Find the minimum cost to create a valid grid path." }
],

// ==================== DAY 285 ====================
// Bellman-Ford & Shortest Paths
285: [
  { title: "Cheapest Flights Within K Stops", platform: "LeetCode", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", description: "Find the cheapest flight route with at most k stops." },
  { title: "Network Delay Time", platform: "LeetCode", url: "https://leetcode.com/problems/network-delay-time/", description: "Compute shortest travel times from a source node." },
  { title: "Find the City With the Smallest Number of Neighbors", platform: "LeetCode", url: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/", description: "Find the city with the fewest reachable neighbors." }
],

// ==================== DAY 286 ====================
// Floyd-Warshall
286: [
  { title: "Find the City With the Smallest Number of Neighbors", platform: "LeetCode", url: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/", description: "Apply all-pairs shortest paths to compare cities." },
  { title: "Evaluate Division", platform: "LeetCode", url: "https://leetcode.com/problems/evaluate-division/", description: "Evaluate division queries using a weighted graph." },
  { title: "All-Pairs Shortest Paths", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1", description: "Compute shortest paths between every pair of vertices." }
],

// ==================== DAY 287 ====================
// Minimum Spanning Tree
287: [
  { title: "Min Cost to Connect All Points", platform: "LeetCode", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/", description: "Find the minimum spanning tree cost for points." },
  { title: "Connecting Cities With Minimum Cost", platform: "LeetCode", url: "https://leetcode.com/problems/connecting-cities-with-minimum-cost/", description: "Connect all cities with minimum total cost." },
  { title: "Kruskal's Algorithm", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1", description: "Construct a minimum spanning tree using edge sorting and DSU." }
],

// ==================== DAY 288 ====================
// DSU Advanced
288: [
  { title: "Accounts Merge", platform: "LeetCode", url: "https://leetcode.com/problems/accounts-merge/", description: "Merge accounts that share common email addresses." },
  { title: "Number of Islands II", platform: "LeetCode", url: "https://leetcode.com/problems/number-of-islands-ii/", description: "Track island counts as land cells are added dynamically." },
  { title: "Making a Large Island", platform: "LeetCode", url: "https://leetcode.com/problems/making-a-large-island/", description: "Maximize island size by flipping one water cell." }
],

// ==================== DAY 289 ====================
// Bridges & Articulation Points
289: [
  { title: "Critical Connections in a Network", platform: "LeetCode", url: "https://leetcode.com/problems/critical-connections-in-a-network/", description: "Find bridges whose removal disconnects the graph." },
  { title: "Bridges in a Graph", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/bridge-in-a-graph/1", description: "Identify all bridge edges in an undirected graph." },
  { title: "Articulation Points", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/articulation-point-1/1", description: "Find vertices whose removal increases connected components." }
],

// ==================== DAY 290 ====================
// Strongly Connected Components
290: [
  { title: "Kosaraju's Algorithm", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1", description: "Find strongly connected components using two DFS passes." },
  { title: "Strongly Connected Components", platform: "GFG", url: "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1", description: "Compute strongly connected components in a directed graph." },
  { title: "2-SAT Problems", platform: "Codeforces Problemset", url: "https://codeforces.com/problemset?tags=2-sat", description: "Solve Boolean satisfiability problems with two literals per clause." }
],

// ==================== DAY 291 ====================
// Graph + DP
291: [
  { title: "Longest Increasing Path in a Matrix", platform: "LeetCode", url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/", description: "Find the longest increasing path using graph DP." },
  { title: "Parallel Courses III", platform: "LeetCode", url: "https://leetcode.com/problems/parallel-courses-iii/", description: "Find the minimum time needed to complete all courses." },
  { title: "Largest Color Value in a Directed Graph", platform: "LeetCode", url: "https://leetcode.com/problems/largest-color-value-in-a-directed-graph/", description: "Maximize color frequency along a directed path." }
],

// ==================== DAY 292 ====================
// Graph Advanced
292: [
  { title: "Shortest Path Visiting All Nodes", platform: "LeetCode", url: "https://leetcode.com/problems/shortest-path-visiting-all-nodes/", description: "Find the shortest walk visiting every node." },
  { title: "Reconstruct Itinerary", platform: "LeetCode", url: "https://leetcode.com/problems/reconstruct-itinerary/", description: "Reconstruct a valid itinerary using all tickets." },
  { title: "Word Ladder", platform: "LeetCode", url: "https://leetcode.com/problems/word-ladder/", description: "Find the shortest transformation sequence between words." }
],

// ==================== DAY 293 ====================
// Graph Revision
293: [
  { title: "Critical Connections in a Network", platform: "LeetCode", url: "https://leetcode.com/problems/critical-connections-in-a-network/", description: "Revise bridge detection using DFS low-link values." },
  { title: "Min Cost to Connect All Points", platform: "LeetCode", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/", description: "Revise minimum spanning tree algorithms." },
  { title: "Network Delay Time", platform: "LeetCode", url: "https://leetcode.com/problems/network-delay-time/", description: "Revise Dijkstra's shortest-path algorithm." }
],

// ==================== PATTERN 31 — SEGMENT TREE & FENWICK TREE (BIT) ====================

// ==================== DAY 294 ====================
// Fenwick Tree Basics
294: [
  { title: "Range Sum Query – Mutable", platform: "LeetCode", url: "https://leetcode.com/problems/range-sum-query-mutable/", description: "Support array updates and range sum queries." },
  { title: "Count of Smaller Numbers After Self", platform: "LeetCode", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", description: "Count smaller elements to the right using a BIT." },
  { title: "Fenwick Tree / Binary Indexed Tree", platform: "GFG", url: "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/", description: "Implement prefix sums and point updates with a Fenwick tree." }
],

// ==================== DAY 295 ====================
// Segment Tree Basics
295: [
  { title: "Range Sum Query – Mutable", platform: "LeetCode", url: "https://leetcode.com/problems/range-sum-query-mutable/", description: "Implement mutable range-sum queries." },
  { title: "Range Minimum Query", platform: "GFG", url: "https://www.geeksforgeeks.org/segment-tree-set-1-range-minimum-query/", description: "Find minimum values over specified ranges." },
  { title: "Segment Tree", platform: "GFG", url: "https://www.geeksforgeeks.org/segment-tree-data-structure/", description: "Build a segment tree for efficient range queries." }
],

// ==================== DAY 296 ====================
// Range Query Problems
296: [
  { title: "Range Sum Query 2D – Immutable", platform: "LeetCode", url: "https://leetcode.com/problems/range-sum-query-2d-immutable/", description: "Answer immutable two-dimensional range-sum queries." },
  { title: "Range Addition", platform: "LeetCode", url: "https://leetcode.com/problems/range-addition/", description: "Apply range increments efficiently using a difference array." },
  { title: "Corporate Flight Bookings", platform: "LeetCode", url: "https://leetcode.com/problems/corporate-flight-bookings/", description: "Calculate booking totals using range updates." }
],

// ==================== DAY 297 ====================
// Segment Tree Applications
297: [
  { title: "Falling Squares", platform: "LeetCode", url: "https://leetcode.com/problems/falling-squares/", description: "Track square heights and maximums after each drop." },
  { title: "My Calendar III", platform: "LeetCode", url: "https://leetcode.com/problems/my-calendar-iii/", description: "Track the maximum overlapping bookings." },
  { title: "The Skyline Problem", platform: "LeetCode", url: "https://leetcode.com/problems/the-skyline-problem/", description: "Compute the skyline from overlapping building intervals." }
],

// ==================== DAY 298 ====================
// Lazy Propagation
298: [
  { title: "Range Module", platform: "LeetCode", url: "https://leetcode.com/problems/range-module/", description: "Maintain covered intervals with range updates and queries." },
  { title: "My Calendar II", platform: "LeetCode", url: "https://leetcode.com/problems/my-calendar-ii/", description: "Reject bookings that cause triple overlaps." },
  { title: "Range Sum Query – Mutable", platform: "LeetCode", url: "https://leetcode.com/problems/range-sum-query-mutable/", description: "Revise dynamic range queries with updates." }
],

// ==================== DAY 299 ====================
// Fenwick Tree Applications
299: [
  { title: "Reverse Pairs", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-pairs/", description: "Count reverse pairs satisfying the doubled-value condition." },
  { title: "Count of Range Sum", platform: "LeetCode", url: "https://leetcode.com/problems/count-of-range-sum/", description: "Count subarray sums falling within a given range." },
  { title: "Create Sorted Array through Instructions", platform: "LeetCode", url: "https://leetcode.com/problems/create-sorted-array-through-instructions/", description: "Compute insertion costs using order statistics." }
],

// ==================== DAY 300 ====================
// Advanced Range Queries
300: [
  { title: "Range Sum Query 2D – Mutable", platform: "LeetCode", url: "https://leetcode.com/problems/range-sum-query-2d-mutable/", description: "Support updates and two-dimensional range sum queries." },
  { title: "Count of Smaller Numbers After Self", platform: "LeetCode", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", description: "Count smaller values after each element." },
  { title: "Reverse Pairs", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-pairs/", description: "Count qualifying reverse pairs efficiently." }
],

// ==================== DAY 301 ====================
// Segment Tree Mixed
301: [
  { title: "Falling Squares", platform: "LeetCode", url: "https://leetcode.com/problems/falling-squares/", description: "Revise range maximum queries and coordinate compression." },
  { title: "Range Module", platform: "LeetCode", url: "https://leetcode.com/problems/range-module/", description: "Revise range coverage operations." },
  { title: "Count of Range Sum", platform: "LeetCode", url: "https://leetcode.com/problems/count-of-range-sum/", description: "Revise range-sum counting techniques." }
],

// ==================== DAY 302 ====================
// Range Query Optimization
302: [
  { title: "Create Sorted Array through Instructions", platform: "LeetCode", url: "https://leetcode.com/problems/create-sorted-array-through-instructions/", description: "Revise Fenwick tree insertion-cost optimization." },
  { title: "Count of Smaller Numbers After Self", platform: "LeetCode", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", description: "Revise BIT-based order counting." },
  { title: "Range Sum Query – Mutable", platform: "LeetCode", url: "https://leetcode.com/problems/range-sum-query-mutable/", description: "Revise dynamic range sums." }
],

// ==================== DAY 303 ====================
// Segment Tree Revision
303: [
  { title: "Range Sum Query – Mutable", platform: "LeetCode", url: "https://leetcode.com/problems/range-sum-query-mutable/", description: "Revise point updates and range queries." },
  { title: "Reverse Pairs", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-pairs/", description: "Revise advanced counting with BIT or merge sort." },
  { title: "Count of Range Sum", platform: "LeetCode", url: "https://leetcode.com/problems/count-of-range-sum/", description: "Revise advanced prefix-sum range counting." }
],
// DSA Problems: Days 304–403 (Q911–Q1210)


  // ==================== DAY 304 — Monotonic Stack ====================
  304: [
    {"title": "Q911. Daily Temperatures", "platform": "LeetCode", "url": "https://leetcode.com/problems/daily-temperatures/?utm_source=chatgpt.com", "description": "Medium | Monotonic Stack"},
    {"title": "Q912. Next Greater Element II", "platform": "LeetCode", "url": "https://leetcode.com/problems/next-greater-element-ii/?utm_source=chatgpt.com", "description": "Medium | Monotonic Stack"},
    {"title": "Q913. Online Stock Span", "platform": "LeetCode", "url": "https://leetcode.com/problems/online-stock-span/?utm_source=chatgpt.com", "description": "Medium | Monotonic Stack"},
  ],

  // ==================== DAY 305 — Histogram Problems ====================
  305: [
    {"title": "Q914. Largest Rectangle in Histogram", "platform": "LeetCode", "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/?utm_source=chatgpt.com", "description": "Hard | Histogram Problems"},
    {"title": "Q915. Maximal Rectangle", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximal-rectangle/?utm_source=chatgpt.com", "description": "Hard | Histogram Problems"},
    {"title": "Q916. Trapping Rain Water", "platform": "LeetCode", "url": "https://leetcode.com/problems/trapping-rain-water/?utm_source=chatgpt.com", "description": "Hard | Histogram Problems"},
  ],

  // ==================== DAY 306 — Stack & Subarray ====================
  306: [
    {"title": "Q917. Sum of Subarray Minimums", "platform": "LeetCode", "url": "https://leetcode.com/problems/sum-of-subarray-minimums/?utm_source=chatgpt.com", "description": "Medium | Stack & Subarray"},
    {"title": "Q918. Sum of Subarray Ranges", "platform": "LeetCode", "url": "https://leetcode.com/problems/sum-of-subarray-ranges/?utm_source=chatgpt.com", "description": "Medium | Stack & Subarray"},
    {"title": "Q919. Maximum Subarray Min-Product", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-subarray-min-product/?utm_source=chatgpt.com", "description": "Medium | Stack & Subarray"},
  ],

  // ==================== DAY 307 — Monotonic Queue ====================
  307: [
    {"title": "Q920. Sliding Window Maximum", "platform": "LeetCode", "url": "https://leetcode.com/problems/sliding-window-maximum/?utm_source=chatgpt.com", "description": "Hard | Monotonic Queue"},
    {"title": "Q921. Shortest Subarray with Sum at Least K", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/?utm_source=chatgpt.com", "description": "Hard | Monotonic Queue"},
    {"title": "Q922. Continuous Subarrays", "platform": "LeetCode", "url": "https://leetcode.com/problems/continuous-subarrays/?utm_source=chatgpt.com", "description": "Medium | Monotonic Queue"},
  ],

  // ==================== DAY 308 — Stack Applications ====================
  308: [
    {"title": "Q923. Remove K Digits", "platform": "LeetCode", "url": "https://leetcode.com/problems/remove-k-digits/?utm_source=chatgpt.com", "description": "Medium | Stack Applications"},
    {"title": "Q924. Create Maximum Number", "platform": "LeetCode", "url": "https://leetcode.com/problems/create-maximum-number/?utm_source=chatgpt.com", "description": "Hard | Stack Applications"},
    {"title": "Q925. Smallest Subsequence of Distinct Characters", "platform": "LeetCode", "url": "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/?utm_source=chatgpt.com", "description": "Medium | Stack Applications"},
  ],

  // ==================== DAY 309 — Expression Evaluation ====================
  309: [
    {"title": "Q926. Basic Calculator II", "platform": "LeetCode", "url": "https://leetcode.com/problems/basic-calculator-ii/?utm_source=chatgpt.com", "description": "Medium | Expression Evaluation"},
    {"title": "Q927. Basic Calculator", "platform": "LeetCode", "url": "https://leetcode.com/problems/basic-calculator/?utm_source=chatgpt.com", "description": "Hard | Expression Evaluation"},
    {"title": "Q928. Basic Calculator III", "platform": "LeetCode", "url": "https://leetcode.com/problems/basic-calculator-iii/?utm_source=chatgpt.com", "description": "Hard | Expression Evaluation"},
  ],

  // ==================== DAY 310 — Stack Design ====================
  310: [
    {"title": "Q929. Min Stack", "platform": "LeetCode", "url": "https://leetcode.com/problems/min-stack/?utm_source=chatgpt.com", "description": "Medium | Stack Design"},
    {"title": "Q930. Maximum Frequency Stack", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-frequency-stack/?utm_source=chatgpt.com", "description": "Hard | Stack Design"},
    {"title": "Q931. Dinner Plate Stacks", "platform": "LeetCode", "url": "https://leetcode.com/problems/dinner-plate-stacks/?utm_source=chatgpt.com", "description": "Hard | Stack Design"},
  ],

  // ==================== DAY 311 — Greedy Stack ====================
  311: [
    {"title": "Q932. Remove Duplicate Letters", "platform": "LeetCode", "url": "https://leetcode.com/problems/remove-duplicate-letters/?utm_source=chatgpt.com", "description": "Medium | Greedy Stack"},
    {"title": "Q933. Lexicographically Smallest Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/?utm_source=chatgpt.com", "description": "Medium | Greedy Stack"},
    {"title": "Q934. Make String Great", "platform": "LeetCode", "url": "https://leetcode.com/problems/make-the-string-great/?utm_source=chatgpt.com", "description": "Easy | Greedy Stack"},
  ],

  // ==================== DAY 312 — Stack & String ====================
  312: [
    {"title": "Q935. Decode String", "platform": "LeetCode", "url": "https://leetcode.com/problems/decode-string/?utm_source=chatgpt.com", "description": "Medium | Stack & String"},
    {"title": "Q936. Score of Parentheses", "platform": "LeetCode", "url": "https://leetcode.com/problems/score-of-parentheses/?utm_source=chatgpt.com", "description": "Medium | Stack & String"},
    {"title": "Q937. Valid Parenthesis String", "platform": "LeetCode", "url": "https://leetcode.com/problems/valid-parenthesis-string/?utm_source=chatgpt.com", "description": "Medium | Stack & String"},
  ],

  // ==================== DAY 313 — Advanced Stack ====================
  313: [
    {"title": "Q938. Reverse Substrings Between Each Pair of Parentheses", "platform": "LeetCode", "url": "https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/?utm_source=chatgpt.com", "description": "Medium | Advanced Stack"},
    {"title": "Q939. Minimum Remove to Make Valid Parentheses", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/?utm_source=chatgpt.com", "description": "Medium | Advanced Stack"},
    {"title": "Q940. Longest Valid Parentheses", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-valid-parentheses/?utm_source=chatgpt.com", "description": "Hard | Advanced Stack"},
  ],
  // ==================== DAY 314 — Combination Backtracking ====================
  314: [
    {"title": "Q941. Combination Sum III", "platform": "LeetCode", "url": "https://leetcode.com/problems/combination-sum-iii/?utm_source=chatgpt.com", "description": "Medium | Combination Backtracking"},
    {"title": "Q942. Permutations II", "platform": "LeetCode", "url": "https://leetcode.com/problems/permutations-ii/?utm_source=chatgpt.com", "description": "Medium | Combination Backtracking"},
    {"title": "Q943. Subsets II", "platform": "LeetCode", "url": "https://leetcode.com/problems/subsets-ii/?utm_source=chatgpt.com", "description": "Medium | Combination Backtracking"},
  ],

  // ==================== DAY 315 — Chess Backtracking ====================
  315: [
    {"title": "Q944. N-Queens II", "platform": "LeetCode", "url": "https://leetcode.com/problems/n-queens-ii/?utm_source=chatgpt.com", "description": "Hard | Chess Backtracking"},
    {"title": "Q945. Knight's Tour", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/the-knights-tour-problem/?utm_source=chatgpt.com", "description": "Medium | Chess Backtracking"},
    {"title": "Q946. Rat in a Maze", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1?utm_source=chatgpt.com", "description": "Medium | Chess Backtracking"},
  ],

  // ==================== DAY 316 — Word Backtracking ====================
  316: [
    {"title": "Q947. Word Search", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-search/?utm_source=chatgpt.com", "description": "Medium | Word Backtracking"},
    {"title": "Q948. Word Search II", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-search-ii/?utm_source=chatgpt.com", "description": "Hard | Word Backtracking"},
    {"title": "Q949. Palindrome Partitioning", "platform": "LeetCode", "url": "https://leetcode.com/problems/palindrome-partitioning/?utm_source=chatgpt.com", "description": "Medium | Word Backtracking"},
  ],

  // ==================== DAY 317 — Partition Backtracking ====================
  317: [
    {"title": "Q950. Partition to K Equal Sum Subsets", "platform": "LeetCode", "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/?utm_source=chatgpt.com", "description": "Medium | Partition Backtracking"},
    {"title": "Q951. Matchsticks to Square", "platform": "LeetCode", "url": "https://leetcode.com/problems/matchsticks-to-square/?utm_source=chatgpt.com", "description": "Medium | Partition Backtracking"},
    {"title": "Q952. Beautiful Arrangement", "platform": "LeetCode", "url": "https://leetcode.com/problems/beautiful-arrangement/?utm_source=chatgpt.com", "description": "Medium | Partition Backtracking"},
  ],

  // ==================== DAY 318 — Advanced Combinations ====================
  318: [
    {"title": "Q953. Combination Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/combination-sum/?utm_source=chatgpt.com", "description": "Medium | Advanced Combinations"},
    {"title": "Q954. Combination Sum II", "platform": "LeetCode", "url": "https://leetcode.com/problems/combination-sum-ii/?utm_source=chatgpt.com", "description": "Medium | Advanced Combinations"},
    {"title": "Q955. Combination Sum IV", "platform": "LeetCode", "url": "https://leetcode.com/problems/combination-sum-iv/?utm_source=chatgpt.com", "description": "Medium | Advanced Combinations"},
  ],

  // ==================== DAY 319 — Backtracking & Strings ====================
  319: [
    {"title": "Q956. Letter Case Permutation", "platform": "LeetCode", "url": "https://leetcode.com/problems/letter-case-permutation/?utm_source=chatgpt.com", "description": "Medium | Backtracking & Strings"},
    {"title": "Q957. Restore IP Addresses", "platform": "LeetCode", "url": "https://leetcode.com/problems/restore-ip-addresses/?utm_source=chatgpt.com", "description": "Medium | Backtracking & Strings"},
    {"title": "Q958. Expression Add Operators", "platform": "LeetCode", "url": "https://leetcode.com/problems/expression-add-operators/?utm_source=chatgpt.com", "description": "Hard | Backtracking & Strings"},
  ],

  // ==================== DAY 320 — Advanced Search ====================
  320: [
    {"title": "Q959. Sudoku Solver", "platform": "LeetCode", "url": "https://leetcode.com/problems/sudoku-solver/?utm_source=chatgpt.com", "description": "Hard | Advanced Search"},
    {"title": "Q960. Crossword Puzzle", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/crossword-puzzle/?utm_source=chatgpt.com", "description": "Medium | Advanced Search"},
    {"title": "Q961. Remove Invalid Parentheses", "platform": "LeetCode", "url": "https://leetcode.com/problems/remove-invalid-parentheses/?utm_source=chatgpt.com", "description": "Hard | Advanced Search"},
  ],

  // ==================== DAY 321 — Backtracking Optimization ====================
  321: [
    {"title": "Q962. Strobogrammatic Number II", "platform": "LeetCode", "url": "https://leetcode.com/problems/strobogrammatic-number-ii/?utm_source=chatgpt.com", "description": "Medium | Backtracking Optimization"},
    {"title": "Q963. Android Unlock Patterns", "platform": "LeetCode", "url": "https://leetcode.com/problems/android-unlock-patterns/?utm_source=chatgpt.com", "description": "Medium | Backtracking Optimization"},
    {"title": "Q964. Generalized Abbreviation", "platform": "LeetCode", "url": "https://leetcode.com/problems/generalized-abbreviation/?utm_source=chatgpt.com", "description": "Medium | Backtracking Optimization"},
  ],

  // ==================== DAY 322 — Backtracking Mixed ====================
  322: [
    {"title": "Q965. Unique Paths III", "platform": "LeetCode", "url": "https://leetcode.com/problems/unique-paths-iii/?utm_source=chatgpt.com", "description": "Hard | Backtracking Mixed"},
    {"title": "Q966. Split a String Into the Max Number of Unique Substrings", "platform": "LeetCode", "url": "https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/?utm_source=chatgpt.com", "description": "Medium | Backtracking Mixed"},
    {"title": "Q967. Maximum Length of a Concatenated String with Unique Characters", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/?utm_source=chatgpt.com", "description": "Medium | Backtracking Mixed"},
  ],

  // ==================== DAY 323 — Revision ====================
  323: [
    {"title": "Q968. N-Queens", "platform": "LeetCode", "url": "https://leetcode.com/problems/n-queens/?utm_source=chatgpt.com", "description": "Hard | Revision"},
    {"title": "Q969. Word Search II", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-search-ii/?utm_source=chatgpt.com", "description": "Hard | Revision"},
    {"title": "Q970. Sudoku Solver", "platform": "LeetCode", "url": "https://leetcode.com/problems/sudoku-solver/?utm_source=chatgpt.com", "description": "Hard | Revision"},
  ],  // ==================== DAY 324 — Greedy Basics ====================
  324: [
    {"title": "Q971. Jump Game", "platform": "LeetCode", "url": "https://leetcode.com/problems/jump-game/?utm_source=chatgpt.com", "description": "Medium | Greedy Basics"},
    {"title": "Q972. Jump Game II", "platform": "LeetCode", "url": "https://leetcode.com/problems/jump-game-ii/?utm_source=chatgpt.com", "description": "Medium | Greedy Basics"},
    {"title": "Q973. Gas Station", "platform": "LeetCode", "url": "https://leetcode.com/problems/gas-station/?utm_source=chatgpt.com", "description": "Medium | Greedy Basics"},
  ],

  // ==================== DAY 325 — Greedy Intervals ====================
  325: [
    {"title": "Q974. Non-overlapping Intervals", "platform": "LeetCode", "url": "https://leetcode.com/problems/non-overlapping-intervals/?utm_source=chatgpt.com", "description": "Medium | Greedy Intervals"},
    {"title": "Q975. Minimum Number of Arrows to Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/?utm_source=chatgpt.com", "description": "Medium | Greedy Intervals"},
    {"title": "Q976. Maximum Length of Pair Chain", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-length-of-pair-chain/?utm_source=chatgpt.com", "description": "Medium | Greedy Intervals"},
  ],

  // ==================== DAY 326 — Greedy & Heap ====================
  326: [
    {"title": "Q977. Task Scheduler", "platform": "LeetCode", "url": "https://leetcode.com/problems/task-scheduler/?utm_source=chatgpt.com", "description": "Medium | Greedy & Heap"},
    {"title": "Q978. Furthest Building You Can Reach", "platform": "LeetCode", "url": "https://leetcode.com/problems/furthest-building-you-can-reach/?utm_source=chatgpt.com", "description": "Medium | Greedy & Heap"},
    {"title": "Q979. Maximum Performance of a Team", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-performance-of-a-team/?utm_source=chatgpt.com", "description": "Hard | Greedy & Heap"},
  ],

  // ==================== DAY 327 — Greedy String ====================
  327: [
    {"title": "Q980. Remove K Digits", "platform": "LeetCode", "url": "https://leetcode.com/problems/remove-k-digits/?utm_source=chatgpt.com", "description": "Medium | Greedy String"},
    {"title": "Q981. Create Maximum Number", "platform": "LeetCode", "url": "https://leetcode.com/problems/create-maximum-number/?utm_source=chatgpt.com", "description": "Hard | Greedy String"},
    {"title": "Q982. Remove Duplicate Letters", "platform": "LeetCode", "url": "https://leetcode.com/problems/remove-duplicate-letters/?utm_source=chatgpt.com", "description": "Medium | Greedy String"},
  ],

  // ==================== DAY 328 — Greedy Scheduling ====================
  328: [
    {"title": "Q983. Maximum Number of Events That Can Be Attended", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/?utm_source=chatgpt.com", "description": "Medium | Greedy Scheduling"},
    {"title": "Q984. Meeting Rooms III", "platform": "LeetCode", "url": "https://leetcode.com/problems/meeting-rooms-iii/?utm_source=chatgpt.com", "description": "Hard | Greedy Scheduling"},
    {"title": "Q985. Two Best Non-Overlapping Events", "platform": "LeetCode", "url": "https://leetcode.com/problems/two-best-non-overlapping-events/?utm_source=chatgpt.com", "description": "Medium | Greedy Scheduling"},
  ],

  // ==================== DAY 329 — Greedy & Arrays ====================
  329: [
    {"title": "Q986. Partition Labels", "platform": "LeetCode", "url": "https://leetcode.com/problems/partition-labels/?utm_source=chatgpt.com", "description": "Medium | Greedy & Arrays"},
    {"title": "Q987. Hand of Straights", "platform": "LeetCode", "url": "https://leetcode.com/problems/hand-of-straights/?utm_source=chatgpt.com", "description": "Medium | Greedy & Arrays"},
    {"title": "Q988. Divide Array in Sets of K Consecutive Numbers", "platform": "LeetCode", "url": "https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/?utm_source=chatgpt.com", "description": "Medium | Greedy & Arrays"},
  ],

  // ==================== DAY 330 — Greedy Advanced ====================
  330: [
    {"title": "Q989. Candy", "platform": "LeetCode", "url": "https://leetcode.com/problems/candy/?utm_source=chatgpt.com", "description": "Hard | Greedy Advanced"},
    {"title": "Q990. Best Time to Buy and Sell Stock II", "platform": "LeetCode", "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/?utm_source=chatgpt.com", "description": "Medium | Greedy Advanced"},
    {"title": "Q991. Minimum Number of Taps to Open to Water a Garden", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/?utm_source=chatgpt.com", "description": "Hard | Greedy Advanced"},
  ],

  // ==================== DAY 331 — Greedy Optimization ====================
  331: [
    {"title": "Q992. Queue Reconstruction by Height", "platform": "LeetCode", "url": "https://leetcode.com/problems/queue-reconstruction-by-height/?utm_source=chatgpt.com", "description": "Medium | Greedy Optimization"},
    {"title": "Q993. Minimum Cost to Connect Sticks", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-connect-sticks/?utm_source=chatgpt.com", "description": "Medium | Greedy Optimization"},
    {"title": "Q994. IPO", "platform": "LeetCode", "url": "https://leetcode.com/problems/ipo/?utm_source=chatgpt.com", "description": "Hard | Greedy Optimization"},
  ],

  // ==================== DAY 332 — Greedy & Math ====================
  332: [
    {"title": "Q995. Integer Break", "platform": "LeetCode", "url": "https://leetcode.com/problems/integer-break/?utm_source=chatgpt.com", "description": "Medium | Greedy & Math"},
    {"title": "Q996. Lemonade Change", "platform": "LeetCode", "url": "https://leetcode.com/problems/lemonade-change/?utm_source=chatgpt.com", "description": "Easy | Greedy & Math"},
    {"title": "Q997. Maximum Units on a Truck", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-units-on-a-truck/?utm_source=chatgpt.com", "description": "Easy | Greedy & Math"},
  ],

  // ==================== DAY 333 — Revision ====================
  333: [
    {"title": "Q998. Jump Game", "platform": "LeetCode", "url": "https://leetcode.com/problems/jump-game/?utm_source=chatgpt.com", "description": "Medium | Revision"},
    {"title": "Q999. Candy", "platform": "LeetCode", "url": "https://leetcode.com/problems/candy/?utm_source=chatgpt.com", "description": "Hard | Revision"},
    {"title": "Q1000. Gas Station", "platform": "LeetCode", "url": "https://leetcode.com/problems/gas-station/?utm_source=chatgpt.com", "description": "Medium | Revision"},
  ],  // ==================== DAY 334 — 2D DP Basics ====================
  334: [
    {"title": "Q1001. Unique Paths", "platform": "LeetCode", "url": "https://leetcode.com/problems/unique-paths/?utm_source=chatgpt.com", "description": "Medium | 2D DP Basics"},
    {"title": "Q1002. Unique Paths II", "platform": "LeetCode", "url": "https://leetcode.com/problems/unique-paths-ii/?utm_source=chatgpt.com", "description": "Medium | 2D DP Basics"},
    {"title": "Q1003. Minimum Path Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-path-sum/?utm_source=chatgpt.com", "description": "Medium | 2D DP Basics"},
  ],

  // ==================== DAY 335 — Grid DP ====================
  335: [
    {"title": "Q1004. Maximal Square", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximal-square/?utm_source=chatgpt.com", "description": "Medium | Grid DP"},
    {"title": "Q1005. Maximal Rectangle", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximal-rectangle/?utm_source=chatgpt.com", "description": "Hard | Grid DP"},
    {"title": "Q1006. Dungeon Game", "platform": "LeetCode", "url": "https://leetcode.com/problems/dungeon-game/?utm_source=chatgpt.com", "description": "Hard | Grid DP"},
  ],

  // ==================== DAY 336 — String DP ====================
  336: [
    {"title": "Q1007. Longest Common Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-common-subsequence/?utm_source=chatgpt.com", "description": "Medium | String DP"},
    {"title": "Q1008. Edit Distance", "platform": "LeetCode", "url": "https://leetcode.com/problems/edit-distance/?utm_source=chatgpt.com", "description": "Medium | String DP"},
    {"title": "Q1009. Distinct Subsequences", "platform": "LeetCode", "url": "https://leetcode.com/problems/distinct-subsequences/?utm_source=chatgpt.com", "description": "Hard | String DP"},
  ],

  // ==================== DAY 337 — Knapsack DP ====================
  337: [
    {"title": "Q1010. 0/1 Knapsack", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/?utm_source=chatgpt.com", "description": "Medium | Knapsack DP"},
    {"title": "Q1011. Partition Equal Subset Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/partition-equal-subset-sum/?utm_source=chatgpt.com", "description": "Medium | Knapsack DP"},
    {"title": "Q1012. Target Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/target-sum/?utm_source=chatgpt.com", "description": "Medium | Knapsack DP"},
  ],

  // ==================== DAY 338 — Interval DP ====================
  338: [
    {"title": "Q1013. Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/burst-balloons/?utm_source=chatgpt.com", "description": "Hard | Interval DP"},
    {"title": "Q1014. Minimum Cost to Cut a Stick", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/?utm_source=chatgpt.com", "description": "Hard | Interval DP"},
    {"title": "Q1015. Strange Printer", "platform": "LeetCode", "url": "https://leetcode.com/problems/strange-printer/?utm_source=chatgpt.com", "description": "Hard | Interval DP"},
  ],

  // ==================== DAY 339 — DP on Subsequences ====================
  339: [
    {"title": "Q1016. Longest Increasing Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-increasing-subsequence/?utm_source=chatgpt.com", "description": "Medium | DP on Subsequences"},
    {"title": "Q1017. Russian Doll Envelopes", "platform": "LeetCode", "url": "https://leetcode.com/problems/russian-doll-envelopes/?utm_source=chatgpt.com", "description": "Hard | DP on Subsequences"},
    {"title": "Q1018. Longest String Chain", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-string-chain/?utm_source=chatgpt.com", "description": "Medium | DP on Subsequences"},
  ],

  // ==================== DAY 340 — DP on Trees ====================
  340: [
    {"title": "Q1019. House Robber III", "platform": "LeetCode", "url": "https://leetcode.com/problems/house-robber-iii/?utm_source=chatgpt.com", "description": "Medium | DP on Trees"},
    {"title": "Q1020. Binary Tree Cameras", "platform": "LeetCode", "url": "https://leetcode.com/problems/binary-tree-cameras/?utm_source=chatgpt.com", "description": "Hard | DP on Trees"},
    {"title": "Q1021. Maximum Sum BST in Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/?utm_source=chatgpt.com", "description": "Hard | DP on Trees"},
  ],

  // ==================== DAY 341 — DP & Bitmask ====================
  341: [
    {"title": "Q1022. Shortest Path Visiting All Nodes", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/?utm_source=chatgpt.com", "description": "Hard | DP & Bitmask"},
    {"title": "Q1023. Smallest Sufficient Team", "platform": "LeetCode", "url": "https://leetcode.com/problems/smallest-sufficient-team/?utm_source=chatgpt.com", "description": "Hard | DP & Bitmask"},
    {"title": "Q1024. Partition to K Equal Sum Subsets", "platform": "LeetCode", "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/?utm_source=chatgpt.com", "description": "Medium | DP & Bitmask"},
  ],

  // ==================== DAY 342 — DP Advanced ====================
  342: [
    {"title": "Q1025. Super Egg Drop", "platform": "LeetCode", "url": "https://leetcode.com/problems/super-egg-drop/?utm_source=chatgpt.com", "description": "Hard | DP Advanced"},
    {"title": "Q1026. Frog Jump", "platform": "LeetCode", "url": "https://leetcode.com/problems/frog-jump/?utm_source=chatgpt.com", "description": "Hard | DP Advanced"},
    {"title": "Q1027. Minimum Difficulty of a Job Schedule", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/?utm_source=chatgpt.com", "description": "Hard | DP Advanced"},
  ],

  // ==================== DAY 343 — Revision ====================
  343: [
    {"title": "Q1028. Edit Distance", "platform": "LeetCode", "url": "https://leetcode.com/problems/edit-distance/?utm_source=chatgpt.com", "description": "Medium | Revision"},
    {"title": "Q1029. Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/burst-balloons/?utm_source=chatgpt.com", "description": "Hard | Revision"},
    {"title": "Q1030. Longest Increasing Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-increasing-subsequence/?utm_source=chatgpt.com", "description": "Medium | Revision"},
  ],  // ==================== DAY 344 — Graph Shortest Paths ====================
  344: [
    {"title": "Q1031. Network Delay Time", "platform": "LeetCode", "url": "https://leetcode.com/problems/network-delay-time/?utm_source=chatgpt.com", "description": "Medium | Graph Shortest Paths"},
    {"title": "Q1032. Cheapest Flights Within K Stops", "platform": "LeetCode", "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/?utm_source=chatgpt.com", "description": "Medium | Graph Shortest Paths"},
    {"title": "Q1033. Find the City With the Smallest Number of Neighbors", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/?utm_source=chatgpt.com", "description": "Medium | Graph Shortest Paths"},
  ],

  // ==================== DAY 345 — MST ====================
  345: [
    {"title": "Q1034. Min Cost to Connect All Points", "platform": "LeetCode", "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/?utm_source=chatgpt.com", "description": "Medium | MST"},
    {"title": "Q1035. Connecting Cities With Minimum Cost", "platform": "LeetCode", "url": "https://leetcode.com/problems/connecting-cities-with-minimum-cost/?utm_source=chatgpt.com", "description": "Medium | MST"},
    {"title": "Q1036. Kruskal's Algorithm", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm/?utm_source=chatgpt.com", "description": "Medium | MST"},
  ],

  // ==================== DAY 346 — DSU Advanced ====================
  346: [
    {"title": "Q1037. Redundant Connection II", "platform": "LeetCode", "url": "https://leetcode.com/problems/redundant-connection-ii/?utm_source=chatgpt.com", "description": "Hard | DSU Advanced"},
    {"title": "Q1038. Accounts Merge", "platform": "LeetCode", "url": "https://leetcode.com/problems/accounts-merge/?utm_source=chatgpt.com", "description": "Medium | DSU Advanced"},
    {"title": "Q1039. Number of Operations to Make Network Connected", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/?utm_source=chatgpt.com", "description": "Medium | DSU Advanced"},
  ],

  // ==================== DAY 347 — Bridges ====================
  347: [
    {"title": "Q1040. Critical Connections in a Network", "platform": "LeetCode", "url": "https://leetcode.com/problems/critical-connections-in-a-network/?utm_source=chatgpt.com", "description": "Hard | Bridges"},
    {"title": "Q1041. Bridges in Graph", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/bridge-in-a-graph/?utm_source=chatgpt.com", "description": "Hard | Bridges"},
    {"title": "Q1042. Articulation Points", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/?utm_source=chatgpt.com", "description": "Hard | Bridges"},
  ],

  // ==================== DAY 348 — SCC ====================
  348: [
    {"title": "Q1043. Strongly Connected Components", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/strongly-connected-components/?utm_source=chatgpt.com", "description": "Hard | SCC"},
    {"title": "Q1044. Kosaraju Algorithm", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/strongly-connected-components/?utm_source=chatgpt.com", "description": "Hard | SCC"},
    {"title": "Q1045. 2-SAT Problems", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=2-sat\\&utm_source=chatgpt.com", "description": "Unknown | SCC"},
  ],

  // ==================== DAY 349 — Flow Algorithms ====================
  349: [
    {"title": "Q1046. Max Flow (Ford-Fulkerson)", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/?utm_source=chatgpt.com", "description": "Unknown | Flow Algorithms"},
    {"title": "Q1047. Maximum Bipartite Matching", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/maximum-bipartite-matching/?utm_source=chatgpt.com", "description": "Unknown | Flow Algorithms"},
    {"title": "Q1048. Min Cut", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/minimum-cut-in-a-flow-network/?utm_source=chatgpt.com", "description": "Unknown | Flow Algorithms"},
  ],

  // ==================== DAY 350 — Bipartite Graph ====================
  350: [
    {"title": "Q1049. Is Graph Bipartite?", "platform": "LeetCode", "url": "https://leetcode.com/problems/is-graph-bipartite/?utm_source=chatgpt.com", "description": "Medium | Bipartite Graph"},
    {"title": "Q1050. Possible Bipartition", "platform": "LeetCode", "url": "https://leetcode.com/problems/possible-bipartition/?utm_source=chatgpt.com", "description": "Medium | Bipartite Graph"},
    {"title": "Q1051. Maximum Bipartite Matching", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/maximum-bipartite-matching/?utm_source=chatgpt.com", "description": "Unknown | Bipartite Graph"},
  ],

  // ==================== DAY 351 — Graph DP ====================
  351: [
    {"title": "Q1052. Longest Increasing Path in a Matrix", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/?utm_source=chatgpt.com", "description": "Hard | Graph DP"},
    {"title": "Q1053. Largest Color Value in a Directed Graph", "platform": "LeetCode", "url": "https://leetcode.com/problems/largest-color-value-in-a-directed-graph/?utm_source=chatgpt.com", "description": "Hard | Graph DP"},
    {"title": "Q1054. Parallel Courses III", "platform": "LeetCode", "url": "https://leetcode.com/problems/parallel-courses-iii/?utm_source=chatgpt.com", "description": "Hard | Graph DP"},
  ],

  // ==================== DAY 352 — Graph Challenges ====================
  352: [
    {"title": "Q1055. Word Ladder", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-ladder/?utm_source=chatgpt.com", "description": "Hard | Graph Challenges"},
    {"title": "Q1056. Reconstruct Itinerary", "platform": "LeetCode", "url": "https://leetcode.com/problems/reconstruct-itinerary/?utm_source=chatgpt.com", "description": "Hard | Graph Challenges"},
    {"title": "Q1057. Shortest Path Visiting All Nodes", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/?utm_source=chatgpt.com", "description": "Hard | Graph Challenges"},
  ],

  // ==================== DAY 353 — Revision ====================
  353: [
    {"title": "Q1058. Critical Connections in a Network", "platform": "LeetCode", "url": "https://leetcode.com/problems/critical-connections-in-a-network/?utm_source=chatgpt.com", "description": "Hard | Revision"},
    {"title": "Q1059. Min Cost to Connect All Points", "platform": "LeetCode", "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/?utm_source=chatgpt.com", "description": "Medium | Revision"},
    {"title": "Q1060. Network Delay Time", "platform": "LeetCode", "url": "https://leetcode.com/problems/network-delay-time/?utm_source=chatgpt.com", "description": "Medium | Revision"},
  ],  // ==================== DAY 354 — Bit Basics ====================
  354: [
    {"title": "Q1061. Single Number", "platform": "LeetCode", "url": "https://leetcode.com/problems/single-number/?utm_source=chatgpt.com", "description": "Easy | Bit Basics"},
    {"title": "Q1062. Single Number II", "platform": "LeetCode", "url": "https://leetcode.com/problems/single-number-ii/?utm_source=chatgpt.com", "description": "Medium | Bit Basics"},
    {"title": "Q1063. Single Number III", "platform": "LeetCode", "url": "https://leetcode.com/problems/single-number-iii/?utm_source=chatgpt.com", "description": "Medium | Bit Basics"},
  ],

  // ==================== DAY 355 — Bit Counting ====================
  355: [
    {"title": "Q1064. Counting Bits", "platform": "LeetCode", "url": "https://leetcode.com/problems/counting-bits/?utm_source=chatgpt.com", "description": "Easy | Bit Counting"},
    {"title": "Q1065. Number of 1 Bits", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-1-bits/?utm_source=chatgpt.com", "description": "Easy | Bit Counting"},
    {"title": "Q1066. Hamming Distance", "platform": "LeetCode", "url": "https://leetcode.com/problems/hamming-distance/?utm_source=chatgpt.com", "description": "Easy | Bit Counting"},
  ],

  // ==================== DAY 356 — XOR Problems ====================
  356: [
    {"title": "Q1067. Missing Number", "platform": "LeetCode", "url": "https://leetcode.com/problems/missing-number/?utm_source=chatgpt.com", "description": "Easy | XOR Problems"},
    {"title": "Q1068. Find the XOR of Numbers Which Appear Twice", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/?utm_source=chatgpt.com", "description": "Medium | XOR Problems"},
    {"title": "Q1069. Maximum XOR of Two Numbers in an Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/?utm_source=chatgpt.com", "description": "Medium | XOR Problems"},
  ],

  // ==================== DAY 357 — Bitmask DP ====================
  357: [
    {"title": "Q1070. Shortest Path Visiting All Nodes", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/?utm_source=chatgpt.com", "description": "Hard | Bitmask DP"},
    {"title": "Q1071. Smallest Sufficient Team", "platform": "LeetCode", "url": "https://leetcode.com/problems/smallest-sufficient-team/?utm_source=chatgpt.com", "description": "Hard | Bitmask DP"},
    {"title": "Q1072. Partition to K Equal Sum Subsets", "platform": "LeetCode", "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/?utm_source=chatgpt.com", "description": "Medium | Bitmask DP"},
  ],

  // ==================== DAY 358 — Bitwise Trie ====================
  358: [
    {"title": "Q1073. Maximum XOR With an Element From Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/?utm_source=chatgpt.com", "description": "Hard | Bitwise Trie"},
    {"title": "Q1074. Maximum XOR of Two Numbers in an Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/?utm_source=chatgpt.com", "description": "Medium | Bitwise Trie"},
    {"title": "Q1075. Count Pairs With XOR in a Range", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-pairs-with-xor-in-a-range/?utm_source=chatgpt.com", "description": "Hard | Bitwise Trie"},
  ],

  // ==================== DAY 359 — Bitwise Optimization ====================
  359: [
    {"title": "Q1076. Sum of Two Integers", "platform": "LeetCode", "url": "https://leetcode.com/problems/sum-of-two-integers/?utm_source=chatgpt.com", "description": "Medium | Bitwise Optimization"},
    {"title": "Q1077. Reverse Bits", "platform": "LeetCode", "url": "https://leetcode.com/problems/reverse-bits/?utm_source=chatgpt.com", "description": "Easy | Bitwise Optimization"},
    {"title": "Q1078. Power of Two", "platform": "LeetCode", "url": "https://leetcode.com/problems/power-of-two/?utm_source=chatgpt.com", "description": "Easy | Bitwise Optimization"},
  ],

  // ==================== DAY 360 — Bitmask & Arrays ====================
  360: [
    {"title": "Q1079. Maximum Product of Word Lengths", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-product-of-word-lengths/?utm_source=chatgpt.com", "description": "Medium | Bitmask & Arrays"},
    {"title": "Q1080. Subsets", "platform": "LeetCode", "url": "https://leetcode.com/problems/subsets/?utm_source=chatgpt.com", "description": "Medium | Bitmask & Arrays"},
    {"title": "Q1081. Gray Code", "platform": "LeetCode", "url": "https://leetcode.com/problems/gray-code/?utm_source=chatgpt.com", "description": "Medium | Bitmask & Arrays"},
  ],

  // ==================== DAY 361 — Advanced XOR ====================
  361: [
    {"title": "Q1082. XOR Queries of a Subarray", "platform": "LeetCode", "url": "https://leetcode.com/problems/xor-queries-of-a-subarray/?utm_source=chatgpt.com", "description": "Medium | Advanced XOR"},
    {"title": "Q1083. Find the Original Array of Prefix XOR", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-the-original-array-of-prefix-xor/?utm_source=chatgpt.com", "description": "Medium | Advanced XOR"},
    {"title": "Q1084. Maximum XOR for Each Query", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-for-each-query/?utm_source=chatgpt.com", "description": "Medium | Advanced XOR"},
  ],

  // ==================== DAY 362 — Bit Manipulation Mixed ====================
  362: [
    {"title": "Q1085. Bitwise AND of Numbers Range", "platform": "LeetCode", "url": "https://leetcode.com/problems/bitwise-and-of-numbers-range/?utm_source=chatgpt.com", "description": "Medium | Bit Manipulation Mixed"},
    {"title": "Q1086. Minimum Flips to Make a OR b Equal to c", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/?utm_source=chatgpt.com", "description": "Medium | Bit Manipulation Mixed"},
    {"title": "Q1087. Number of Steps to Reduce a Number in Binary Representation to One", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/?utm_source=chatgpt.com", "description": "Medium | Bit Manipulation Mixed"},
  ],

  // ==================== DAY 363 — Revision ====================
  363: [
    {"title": "Q1088. Single Number II", "platform": "LeetCode", "url": "https://leetcode.com/problems/single-number-ii/?utm_source=chatgpt.com", "description": "Medium | Revision"},
    {"title": "Q1089. Maximum XOR of Two Numbers in an Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/?utm_source=chatgpt.com", "description": "Medium | Revision"},
    {"title": "Q1090. Bitwise AND of Numbers Range", "platform": "LeetCode", "url": "https://leetcode.com/problems/bitwise-and-of-numbers-range/?utm_source=chatgpt.com", "description": "Medium | Revision"},
  ],
    // ==================== DAY 364 — Ordered Set ====================
  364: [
    {"title": "Q1091. Contains Duplicate III", "platform": "LeetCode", "url": "https://leetcode.com/problems/contains-duplicate-iii/?utm_source=chatgpt.com", "description": "Hard | Ordered Set"},
    {"title": "Q1092. My Calendar I", "platform": "LeetCode", "url": "https://leetcode.com/problems/my-calendar-i/?utm_source=chatgpt.com", "description": "Medium | Ordered Set"},
    {"title": "Q1093. My Calendar II", "platform": "LeetCode", "url": "https://leetcode.com/problems/my-calendar-ii/?utm_source=chatgpt.com", "description": "Medium | Ordered Set"},
  ],

  // ==================== DAY 365 — Ordered Map ====================
  365: [
    {"title": "Q1094. Data Stream as Disjoint Intervals", "platform": "LeetCode", "url": "https://leetcode.com/problems/data-stream-as-disjoint-intervals/?utm_source=chatgpt.com", "description": "Hard | Ordered Map"},
    {"title": "Q1095. Range Module", "platform": "LeetCode", "url": "https://leetcode.com/problems/range-module/?utm_source=chatg.com", "description": "Hard | Ordered Map"},
    {"title": "Q1096. Snapshot Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/snapshot-array/?utm_source=chatgpt.com", "description": "Medium | Ordered Map"},
  ],

  // ==================== DAY 366 — Design Data Structures ====================
  366: [
    {"title": "Q1097. LRU Cache", "platform": "LeetCode", "url": "https://leetcode.com/problems/lru-cache/?utm_source=chatgpt.com", "description": "Medium | Design Data Structures"},
    {"title": "Q1098. LFU Cache", "platform": "LeetCode", "url": "https://leetcode.com/problems/lfu-cache/?utm_source=chatgpt.com", "description": "Hard | Design Data Structures"},
    {"title": "Q1099. All O(1) Data Structure", "platform": "LeetCode", "url": "https://leetcode.com/problems/all-oone-data-structure/?utm_source=chatgpt.com", "description": "Hard | Design Data Structures"},
  ],

  // ==================== DAY 367 — Randomized Structures ====================
  367: [
    {"title": "Q1100. Insert Delete GetRandom O(1)", "platform": "LeetCode", "url": "https://leetcode.com/problems/insert-delete-getrandom-o1/?utm_source=chatgpt.com", "description": "Medium | Randomized Structures"},
    {"title": "Q1101. Insert Delete GetRandom O(1) – Duplicates Allowed", "platform": "LeetCode", "url": "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/?utm_source=chatgpt.com", "description": "Hard | Randomized Structures"},
    {"title": "Q1102. Random Pick with Weight", "platform": "LeetCode", "url": "https://leetcode.com/problems/random-pick-with-weight/?utm_source=chatgpt.com", "description": "Medium | Randomized Structures"},
  ],

  // ==================== DAY 368 — Data Structure Design ====================
  368: [
    {"title": "Q1103. Design Twitter", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-twitter/?utm_source=chatgpt.com", "description": "Medium | Data Structure Design"},
    {"title": "Q1104. Design Browser History", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-browser-history/?utm_source=chatgpt.com", "description": "Medium | Data Structure Design"},
    {"title": "Q1105. Design Underground System", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-underground-system/?utm_source=chatgpt.com", "description": "Medium | Data Structure Design"},
  ],

  // ==================== DAY 369 — Ordered Data Challenges ====================
  369: [
    {"title": "Q1106. Sliding Window Median", "platform": "LeetCode", "url": "https://leetcode.com/problems/sliding-window-median/?utm_source=chatgpt.com", "description": "Hard | Ordered Data Challenges"},
    {"title": "Q1107. Find Median from Data Stream", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-median-from-data-stream/?utm_source=chatgpt.com", "description": "Hard | Ordered Data Challenges"},
    {"title": "Q1108. Contains Duplicate III", "platform": "LeetCode", "url": "https://leetcode.com/problems/contains-duplicate-iii/?utm_source=chatgpt.com", "description": "Hard | Ordered Data Challenges"},
  ],

  // ==================== DAY 370 — Cache & Queue ====================
  370: [
    {"title": "Q1109. Design Circular Queue", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-circular-queue/?utm_source=chatgpt.com", "description": "Medium | Cache & Queue"},
    {"title": "Q1110. Design Circular Deque", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-circular-deque/?utm_source=chatgpt.com", "description": "Medium | Cache & Queue"},
    {"title": "Q1111. Design Front Middle Back Queue", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-front-middle-back-queue/?utm_source=chatgpt.com", "description": "Medium | Cache & Queue"},
  ],

  // ==================== DAY 371 — Advanced Structures ====================
  371: [
    {"title": "Q1112. Design Skiplist", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-skiplist/?utm_source=chatgpt.com", "description": "Hard | Advanced Structures"},
    {"title": "Q1113. Design a Food Rating System", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-a-food-rating-system/?utm_source=chatgpt.com", "description": "Medium | Advanced Structures"},
    {"title": "Q1114. Stock Price Fluctuation", "platform": "LeetCode", "url": "https://leetcode.com/problems/stock-price-fluctuation/?utm_source=chatgpt.com", "description": "Medium | Advanced Structures"},
  ],

  // ==================== DAY 372 — Structure Mixed ====================
  372: [
    {"title": "Q1115. Time Based Key-Value Store", "platform": "LeetCode", "url": "https://leetcode.com/problems/time-based-key-value-store/?utm_source=chatgpt.com", "description": "Medium | Structure Mixed"},
    {"title": "Q1116. Design Authentication Manager", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-authentication-manager/?utm_source=chatgpt.com", "description": "Medium | Structure Mixed"},
    {"title": "Q1117. Design Hit Counter", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-hit-counter/?utm_source=chatgpt.com", "description": "Medium | Structure Mixed"},
  ],

  // ==================== DAY 373 — Revision ====================
  373: [
    {"title": "Q1118. LRU Cache", "platform": "LeetCode", "url": "https://leetcode.com/problems/lru-cache/?utm_source=chatgpt.com", "description": "Medium | Revision"},
    {"title": "Q1119. LFU Cache", "platform": "LeetCode", "url": "https://leetcode.com/problems/lfu-cache/?utm_source=chatgpt.com", "description": "Hard | Revision"},
    {"title": "Q1120. Sliding Window Median", "platform": "LeetCode", "url": "https://leetcode.com/problems/sliding-window-median/?utm_source=chatgpt.com", "description": "Hard | Revision"},
  ],
    // ==================== DAY 374 — Geometry Basics ====================
  374: [
    {"title": "Q1121. Valid Boomerang", "platform": "LeetCode", "url": "https://leetcode.com/problems/valid-boomerang/?utm_source=chatgpt.com", "description": "Easy | Geometry Basics"},
    {"title": "Q1122. Check If It Is a Straight Line", "platform": "LeetCode", "url": "https://leetcode.com/problems/check-if-it-is-a-straight-line/?utm_source=chatgpt.com", "description": "Easy | Geometry Basics"},
    {"title": "Q1123. Minimum Area Rectangle", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-area-rectangle/?utm_source=chatgpt.com", "description": "Medium | Geometry Basics"},
  ],

  // ==================== DAY 375 — Geometry & Points ====================
  375: [
    {"title": "Q1124. Max Points on a Line", "platform": "LeetCode", "url": "https://leetcode.com/problems/max-points-on-a-line/?utm_source=chatgpt.com", "description": "Hard | Geometry & Points"},
    {"title": "Q1125. Rectangle Overlap", "platform": "LeetCode", "url": "https://leetcode.com/problems/rectangle-overlap/?utm_source=chatgpt.com", "description": "Easy | Geometry & Points"},
    {"title": "Q1126. Detect Squares", "platform": "LeetCode", "url": "https://leetcode.com/problems/detect-squares/?utm_source=chatgpt.com", "description": "Medium | Geometry & Points"},
  ],

  // ==================== DAY 376 — Sweep Line ====================
  376: [
    {"title": "Q1127. The Skyline Problem", "platform": "LeetCode", "url": "https://leetcode.com/problems/the-skyline-problem/?utm_source=chatgpt.com", "description": "Hard | Sweep Line"},
    {"title": "Q1128. Meeting Rooms III", "platform": "LeetCode", "url": "https://leetcode.com/problems/meeting-rooms-iii/?utm_source=chatgpt.com", "description": "Hard | Sweep Line"},
    {"title": "Q1129. My Calendar III", "platform": "LeetCode", "url": "https://leetcode.com/problems/my-calendar-iii/?utm_source=chatgpt.com", "description": "Hard | Sweep Line"},
  ],

  // ==================== DAY 377 — Rectangle Problems ====================
  377: [
    {"title": "Q1130. Perfect Rectangle", "platform": "LeetCode", "url": "https://leetcode.com/problems/perfect-rectangle/?utm_source=chatgpt.com", "description": "Hard | Rectangle Problems"},
    {"title": "Q1131. Rectangle Area", "platform": "LeetCode", "url": "https://leetcode.com/problems/rectangle-area/?utm_source=chatgpt.com", "description": "Medium | Rectangle Problems"},
    {"title": "Q1132. Rectangle Area II", "platform": "LeetCode", "url": "https://leetcode.com/problems/rectangle-area-ii/?utm_source=chatgpt.com", "description": "Hard | Rectangle Problems"},
  ],

  // ==================== DAY 378 — Geometry Advanced ====================
  378: [
    {"title": "Q1133. Erect the Fence", "platform": "LeetCode", "url": "https://leetcode.com/problems/erect-the-fence/?utm_source=chatgpt.com", "description": "Hard | Geometry Advanced"},
    {"title": "Q1134. Convex Hull", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/convex-hull-using-graham-scan/?utm_source=chatgpt.com", "description": "Unknown | Geometry Advanced"},
    {"title": "Q1135. Closest Pair of Points", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/closest-pair-of-points-using-divide-and-conquer-algorithm/?utm_source=chatgpt.com", "description": "Unknown | Geometry Advanced"},
  ],

  // ==================== DAY 379 — Line Sweeping ====================
  379: [
    {"title": "Q1136. Brightest Position on Street", "platform": "LeetCode", "url": "https://leetcode.com/problems/brightest-position-on-street/?utm_source=chatgpt.com", "description": "Medium | Line Sweeping"},
    {"title": "Q1137. Minimum Interval to Include Each Query", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-interval-to-include-each-query/?utm_source=chatgpt.com", "description": "Hard | Line Sweeping"},
    {"title": "Q1138. Divide Intervals Into Minimum Number of Groups", "platform": "LeetCode", "url": "https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/?utm_source=chatgpt.com", "description": "Medium | Line Sweeping"},
  ],

  // ==================== DAY 380 — Geometry & Sorting ====================
  380: [
    {"title": "Q1139. K Closest Points to Origin", "platform": "LeetCode", "url": "https://leetcode.com/problems/k-closest-points-to-origin/?utm_source=chatgpt.com", "description": "Medium | Geometry & Sorting"},
    {"title": "Q1140. Largest Triangle Area", "platform": "LeetCode", "url": "https://leetcode.com/problems/largest-triangle-area/?utm_source=chatgpt.com", "description": "Easy | Geometry & Sorting"},
    {"title": "Q1141. Minimum Area Rectangle", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-area-rectangle/?utm_source=chatgpt.com", "description": "Medium | Geometry & Sorting"},
  ],

  // ==================== DAY 381 — Advanced Sweep ====================
  381: [
    {"title": "Q1142. Falling Squares", "platform": "LeetCode", "url": "https://leetcode.com/problems/falling-squares/?utm_source=chatgpt.com", "description": "Hard | Advanced Sweep"},
    {"title": "Q1143. Count of Range Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-of-range-sum/?utm_source=chatgpt.com", "description": "Hard | Advanced Sweep"},
    {"title": "Q1144. Reverse Pairs", "platform": "LeetCode", "url": "https://leetcode.com/problems/reverse-pairs/?utm_source=chatgpt.com", "description": "Hard | Advanced Sweep"},
  ],

  // ==================== DAY 382 — Geometry Mixed ====================
  382: [
    {"title": "Q1145. Number of Boomerangs", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-boomerangs/?utm_source=chatgpt.com", "description": "Medium | Geometry Mixed"},
    {"title": "Q1146. Largest Perimeter Triangle", "platform": "LeetCode", "url": "https://leetcode.com/problems/largest-perimeter-triangle/?utm_source=chatgpt.com", "description": "Easy | Geometry Mixed"},
    {"title": "Q1147. Minimum Moves to Equal Array Elements II", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/?utm_source=chatgpt.com", "description": "Medium | Geometry Mixed"},
  ],

  // ==================== DAY 383 — Revision ====================
  383: [
    {"title": "Q1148. Max Points on a Line", "platform": "LeetCode", "url": "https://leetcode.com/problems/max-points-on-a-line/?utm_source=chatgpt.com", "description": "Hard | Revision"},
    {"title": "Q1149. The Skyline Problem", "platform": "LeetCode", "url": "https://leetcode.com/problems/the-skyline-problem/?utm_source=chatgpt.com", "description": "Hard | Revision"},
    {"title": "Q1150. Erect the Fence", "platform": "LeetCode", "url": "https://leetcode.com/problems/erect-the-fence/?utm_source=chatgpt.com", "description": "Hard | Revision"},
  ],  // ==================== DAY 384 — Codeforces Div. 2 Practice ====================
  384: [
    {"title": "Q1151. Watermelon", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/4/A?utm_source=chatgpt.com", "description": "Unknown | Codeforces Div. 2 Practice"},
    {"title": "Q1152. Way Too Long Words", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/71/A?utm_source=chatgpt.com", "description": "Unknown | Codeforces Div. 2 Practice"},
    {"title": "Q1153. Team", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/231/A?utm_source=chatgpt.com", "description": "Unknown | Codeforces Div. 2 Practice"},
  ],

  // ==================== DAY 385 — Greedy CF ====================
  385: [
    {"title": "Q1154. Next Round", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/158/A?utm_source=chatgpt.com", "description": "Unknown | Greedy CF"},
    {"title": "Q1155. Taxi", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/158/B?utm_source=chatgpt.com", "description": "Unknown | Greedy CF"},
    {"title": "Q1156. Two Buttons", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/520/B?utm_source=chatgpt.com", "description": "Unknown | Greedy CF"},
  ],

  // ==================== DAY 386 — Implementation CF ====================
  386: [
    {"title": "Q1157. Beautiful Matrix", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/263/A?utm_source=chatgpt.com", "description": "Unknown | Implementation CF"},
    {"title": "Q1158. Helpful Maths", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/339/A?utm_source=chatgpt.com", "description": "Unknown | Implementation CF"},
    {"title": "Q1159. Petya and Strings", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/112/A?utm_source=chatgpt.com", "description": "Unknown | Implementation CF"},
  ],

  // ==================== DAY 387 — Binary Search CF ====================
  387: [
    {"title": "Q1160. Packing Rectangles", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/1054/B?utm_source=chatgpt.com", "description": "Unknown | Binary Search CF"},
    {"title": "Q1161. Hamburgers", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/371/C?utm_source=chatgpt.com", "description": "Unknown | Binary Search CF"},
    {"title": "Q1162. Magic Powder – 1", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/670/D1?utm_source=chatgpt.com", "description": "Unknown | Binary Search CF"},
  ],

  // ==================== DAY 388 — Graph CF ====================
  388: [
    {"title": "Q1163. Kefa and Park", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/580/C?utm_source=chatgpt.com", "description": "Unknown | Graph CF"},
    {"title": "Q1164. Journey", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/839/C?utm_source=chatgpt.com", "description": "Unknown | Graph CF"},
    {"title": "Q1165. The Child and Toy", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/\\(child-and-toy", "description": "Unknown | Graph CF"},
  ],

  // ==================== DAY 389 — DP CF ====================
  389: [
    {"title": "Q1166. Pasha and String", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/525/A?utm_source=chatgpt.com", "description": "Unknown | DP CF"},
    {"title": "Q1167. DZY Loves Sequences", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/446/A?utm_source=chatgpt.com", "description": "Unknown | DP CF"},
    {"title": "Q1168. Little Girl and Maximum Sum", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/276/C?utm_source=chatgpt.com", "description": "Unknown | DP CF"},
  ],

  // ==================== DAY 390 — Greedy & Sorting CF ====================
  390: [
    {"title": "Q1169. Dragons", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/230/A?utm_source=chatgpt.com", "description": "Unknown | Greedy & Sorting CF"},
    {"title": "Q1170. Fence", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/363/B?utm_source=chatgpt.com", "description": "Unknown | Greedy & Sorting CF"},
    {"title": "Q1171. Ilya and Queries", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/313/B?utm_source=chatgpt.com", "description": "Unknown | Greedy & Sorting CF"},
  ],

  // ==================== DAY 391 — Advanced CF ====================
  391: [
    {"title": "Q1172. Little Elephant and Bits", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/258/A?utm_source=chatgpt.com", "description": "Unknown | Advanced CF"},
    {"title": "Q1173. Xenia and Ringroad", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/339/B?utm_source=chatgpt.com", "description": "Unknown | Advanced CF"},
    {"title": "Q1174. Jeff and Periods", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/352/A?utm_source=chatgpt.com", "description": "Unknown | Advanced CF"},
  ],

  // ==================== DAY 392 — Mixed CF ====================
  392: [
    {"title": "Q1175. Theatre Square", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/1/A?utm_source=chatgpt.com", "description": "Unknown | Mixed CF"},
    {"title": "Q1176. Sereja and Dima", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/381/A?utm_source=chatgpt.com", "description": "Unknown | Mixed CF"},
    {"title": "Q1177. Arrival of the General", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/144/A?utm_source=chatgpt.com", "description": "Unknown | Mixed CF"},
  ],

  // ==================== DAY 393 — Revision ====================
  393: [
    {"title": "Q1178. Taxi", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/158/B?utm_source=chatgpt.com", "description": "Unknown | Revision"},
    {"title": "Q1179. Two Buttons", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/520/B?utm_source=chatgpt.com", "description": "Unknown | Revision"},
    {"title": "Q1180. Hamburgers", "platform": "Codeforces", "url": "https://codeforces.com/problemset/problem/371/C?utm_source=chatgpt.com", "description": "Unknown | Revision"},
  ],
    // ==================== DAY 394 — Array Interview ====================
  394: [
    {"title": "Q1181. First Missing Positive", "platform": "LeetCode", "url": "https://leetcode.com/problems/first-missing-positive/?utm_source=chatgpt.com", "description": "Hard | Array Interview"},
    {"title": "Q1182. Product of Array Except Self", "platform": "LeetCode", "url": "https://leetcode.com/problems/product-of-array-except-self/?utm_source=chatgpt.com", "description": "Medium | Array Interview"},
    {"title": "Q1183. Maximum Subarray", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-subarray/?utm_source=chatgpt.com", "description": "Medium | Array Interview"},
  ],

  // ==================== DAY 395 — String Interview ====================
  395: [
    {"title": "Q1184. Minimum Window Substring", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-window-substring/?utm_source=chatgpt.com", "description": "Hard | String Interview"},
    {"title": "Q1185. Longest Substring Without Repeating Characters", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/?utm_source=chatgpt.com", "description": "Medium | String Interview"},
    {"title": "Q1186. Group Anagrams", "platform": "LeetCode", "url": "https://leetcode.com/problems/group-anagrams/?utm_source=chatgpt.com", "description": "Medium | String Interview"},
  ],

  // ==================== DAY 396 — Linked List Interview ====================
  396: [
    {"title": "Q1187. Reverse Nodes in k-Group", "platform": "LeetCode", "url": "https://leetcode.com/problems/reverse-nodes-in-k-group/?utm_source=chatgpt.com", "description": "Hard | Linked List Interview"},
    {"title": "Q1188. Merge k Sorted Lists", "platform": "LeetCode", "url": "https://leetcode.com/problems/merge-k-sorted-lists/?utm_source=chatgpt.com", "description": "Hard | Linked List Interview"},
    {"title": "Q1189. Copy List with Random Pointer", "platform": "LeetCode", "url": "https://leetcode.com/problems/copy-list-with-random-pointer/?utm_source=chatgpt.com", "description": "Medium | Linked List Interview"},
  ],

  // ==================== DAY 397 — Tree Interview ====================
  397: [
    {"title": "Q1190. Binary Tree Maximum Path Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/?utm_source=chatgpt.com", "description": "Hard | Tree Interview"},
    {"title": "Q1191. Serialize and Deserialize Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/?utm_source=chatgpt.com", "description": "Hard | Tree Interview"},
    {"title": "Q1192. Lowest Common Ancestor of a Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/?utm_source=chatgpt.com", "description": "Medium | Tree Interview"},
  ],

  // ==================== DAY 398 — Graph Interview ====================
  398: [
    {"title": "Q1193. Word Ladder", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-ladder/?utm_source=chatgpt.com", "description": "Hard | Graph Interview"},
    {"title": "Q1194. Course Schedule", "platform": "LeetCode", "url": "https://leetcode.com/problems/course-schedule/?utm_source=chatgpt.com", "description": "Medium | Graph Interview"},
    {"title": "Q1195. Number of Islands", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-islands/?utm_source=chatgpt.com", "description": "Medium | Graph Interview"},
  ],

  // ==================== DAY 399 — DP Interview ====================
  399: [
    {"title": "Q1196. Coin Change", "platform": "LeetCode", "url": "https://leetcode.com/problems/coin-change/?utm_source=chatgpt.com", "description": "Medium | DP Interview"},
    {"title": "Q1197. Longest Increasing Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-increasing-subsequence/?utm_source=chatgpt.com", "description": "Medium | DP Interview"},
    {"title": "Q1198. Edit Distance", "platform": "LeetCode", "url": "https://leetcode.com/problems/edit-distance/?utm_source=chatgpt.com", "description": "Medium | DP Interview"},
  ],

  // ==================== DAY 400 — Heap Interview ====================
  400: [
    {"title": "Q1199. Find Median from Data Stream", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-median-from-data-stream/?utm_source=chatgpt.com", "description": "Hard | Heap Interview"},
    {"title": "Q1200. Top K Frequent Elements", "platform": "LeetCode", "url": "https://leetcode.com/problems/top-k-frequent-elements/?utm_source=chatgpt.com", "description": "Medium | Heap Interview"},
    {"title": "Q1201. Merge k Sorted Lists", "platform": "LeetCode", "url": "https://leetcode.com/problems/merge-k-sorted-lists/?utm_source=chatgpt.com", "description": "Hard | Heap Interview"},
  ],

  // ==================== DAY 401 — Binary Search Interview ====================
  401: [
    {"title": "Q1202. Median of Two Sorted Arrays", "platform": "LeetCode", "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/?utm_source=chatgpt.com", "description": "Hard | Binary Search Interview"},
    {"title": "Q1203. Search in Rotated Sorted Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/?utm_source=chatgpt.com", "description": "Medium | Binary Search Interview"},
    {"title": "Q1204. Koko Eating Bananas", "platform": "LeetCode", "url": "https://leetcode.com/problems/koko-eating-bananas/?utm_source=chatgpt.com", "description": "Medium | Binary Search Interview"},
  ],

  // ==================== DAY 402 — Mixed Advanced ====================
  402: [
    {"title": "Q1205. Trapping Rain Water", "platform": "LeetCode", "url": "https://leetcode.com/problems/trapping-rain-water/?utm_source=chatgpt.com", "description": "Hard | Mixed Advanced"},
    {"title": "Q1206. Largest Rectangle in Histogram", "platform": "LeetCode", "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/?utm_source=chatgpt.com", "description": "Hard | Mixed Advanced"},
    {"title": "Q1207. N-Queens", "platform": "LeetCode", "url": "https://leetcode.com/problems/n-queens/?utm_source=chatgpt.com", "description": "Hard | Mixed Advanced"},
  ],

  // ==================== DAY 403 — Final Revision of This Chunk ====================
  403: [
    {"title": "Q1208. Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/burst-balloons/?utm_source=chatgpt.com", "description": "Hard | Final Revision of This Chunk"},
    {"title": "Q1209. Critical Connections in a Network", "platform": "LeetCode", "url": "https://leetcode.com/problems/critical-connections-in-a-network/?utm_source=chatgpt.com", "description": "Hard | Final Revision of This Chunk"},
    {"title": "Q1210. Word Search II", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-search-ii/?utm_source=chatgpt.com", "description": "Hard | Final Revision of This Chunk"},
  ],
    // ==================== DAY 404 — Advanced Mixed Interview Problems ====================
  404: [
    {"title": "Q1211. Longest Consecutive Sequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-consecutive-sequence/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1212. Product of Array Except Self", "platform": "LeetCode", "url": "https://leetcode.com/problems/product-of-array-except-self/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1213. Maximum Product Subarray", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-product-subarray/", "description": "Medium | Advanced Mixed Interview Problems"},
  ],

  // ==================== DAY 405 — Advanced Mixed Interview Problems ====================
  405: [
    {"title": "Q1214. Subarray Sum Equals K", "platform": "LeetCode", "url": "https://leetcode.com/problems/subarray-sum-equals-k/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1215. Continuous Subarray Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/continuous-subarray-sum/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1216. Count Number of Nice Subarrays", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-number-of-nice-subarrays/", "description": "Medium | Advanced Mixed Interview Problems"},
  ],

  // ==================== DAY 406 — Advanced Mixed Interview Problems ====================
  406: [
    {"title": "Q1217. 4Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/4sum/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1218. 3Sum Closest", "platform": "LeetCode", "url": "https://leetcode.com/problems/3sum-closest/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1219. Container With Most Water", "platform": "LeetCode", "url": "https://leetcode.com/problems/container-with-most-water/", "description": "Medium | Advanced Mixed Interview Problems"},
  ],

  // ==================== DAY 407 — Advanced Mixed Interview Problems ====================
  407: [
    {"title": "Q1220. Trapping Rain Water", "platform": "LeetCode", "url": "https://leetcode.com/problems/trapping-rain-water/", "description": "Hard | Advanced Mixed Interview Problems"},
    {"title": "Q1221. Largest Rectangle in Histogram", "platform": "LeetCode", "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/", "description": "Hard | Advanced Mixed Interview Problems"},
    {"title": "Q1222. Maximal Rectangle", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximal-rectangle/", "description": "Hard | Advanced Mixed Interview Problems"},
  ],

  // ==================== DAY 408 — Advanced Mixed Interview Problems ====================
  408: [
    {"title": "Q1223. Sliding Window Maximum", "platform": "LeetCode", "url": "https://leetcode.com/problems/sliding-window-maximum/", "description": "Hard | Advanced Mixed Interview Problems"},
    {"title": "Q1224. Minimum Window Substring", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-window-substring/", "description": "Hard | Advanced Mixed Interview Problems"},
    {"title": "Q1225. Longest Substring Without Repeating Characters", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/", "description": "Medium | Advanced Mixed Interview Problems"},
  ],

  // ==================== DAY 409 — Advanced Mixed Interview Problems ====================
  409: [
    {"title": "Q1226. Find All Anagrams in a String", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1227. Permutation in String", "platform": "LeetCode", "url": "https://leetcode.com/problems/permutation-in-string/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1228. Longest Repeating Character Replacement", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-repeating-character-replacement/", "description": "Medium | Advanced Mixed Interview Problems"},
  ],

  // ==================== DAY 410 — Advanced Mixed Interview Problems ====================
  410: [
    {"title": "Q1229. Search in Rotated Sorted Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1230. Find Minimum in Rotated Sorted Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1231. Median of Two Sorted Arrays", "platform": "LeetCode", "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/", "description": "Hard | Advanced Mixed Interview Problems"},
  ],

  // ==================== DAY 411 — Advanced Mixed Interview Problems ====================
  411: [
    {"title": "Q1232. Kth Largest Element in an Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1233. Top K Frequent Elements", "platform": "LeetCode", "url": "https://leetcode.com/problems/top-k-frequent-elements/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1234. Find K Pairs with Smallest Sums", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", "description": "Medium | Advanced Mixed Interview Problems"},
  ],

  // ==================== DAY 412 — Advanced Mixed Interview Problems ====================
  412: [
    {"title": "Q1235. Merge Intervals", "platform": "LeetCode", "url": "https://leetcode.com/problems/merge-intervals/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1236. Insert Interval", "platform": "LeetCode", "url": "https://leetcode.com/problems/insert-interval/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1237. Non-overlapping Intervals", "platform": "LeetCode", "url": "https://leetcode.com/problems/non-overlapping-intervals/", "description": "Medium | Advanced Mixed Interview Problems"},
  ],

  // ==================== DAY 413 — Advanced Mixed Interview Problems ====================
  413: [
    {"title": "Q1238. Meeting Rooms II", "platform": "LeetCode", "url": "https://leetcode.com/problems/meeting-rooms-ii/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1239. Minimum Number of Arrows to Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", "description": "Medium | Advanced Mixed Interview Problems"},
    {"title": "Q1240. Employee Free Time", "platform": "LeetCode", "url": "https://leetcode.com/problems/employee-free-time/", "description": "Hard | Advanced Mixed Interview Problems"},
  ],
    // ==================== DAY 414 — Advanced Dynamic Programming ====================
  414: [
    {"title": "Q1241. Edit Distance", "platform": "LeetCode", "url": "https://leetcode.com/problems/edit-distance/", "description": "Hard | Advanced Dynamic Programming"},
    {"title": "Q1242. Distinct Subsequences", "platform": "LeetCode", "url": "https://leetcode.com/problems/distinct-subsequences/", "description": "Hard | Advanced Dynamic Programming"},
    {"title": "Q1243. Interleaving String", "platform": "LeetCode", "url": "https://leetcode.com/problems/interleaving-string/", "description": "Medium | Advanced Dynamic Programming"},
  ],

  // ==================== DAY 415 — Advanced Dynamic Programming ====================
  415: [
    {"title": "Q1244. Wildcard Matching", "platform": "LeetCode", "url": "https://leetcode.com/problems/wildcard-matching/", "description": "Hard | Advanced Dynamic Programming"},
    {"title": "Q1245. Regular Expression Matching", "platform": "LeetCode", "url": "https://leetcode.com/problems/regular-expression-matching/", "description": "Hard | Advanced Dynamic Programming"},
    {"title": "Q1246. Scramble String", "platform": "LeetCode", "url": "https://leetcode.com/problems/scramble-string/", "description": "Hard | Advanced Dynamic Programming"},
  ],

  // ==================== DAY 416 — Advanced Dynamic Programming ====================
  416: [
    {"title": "Q1247. Longest Increasing Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-increasing-subsequence/", "description": "Medium | Advanced Dynamic Programming"},
    {"title": "Q1248. Number of Longest Increasing Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/", "description": "Medium | Advanced Dynamic Programming"},
    {"title": "Q1249. Russian Doll Envelopes", "platform": "LeetCode", "url": "https://leetcode.com/problems/russian-doll-envelopes/", "description": "Hard | Advanced Dynamic Programming"},
  ],

  // ==================== DAY 417 — Advanced Dynamic Programming ====================
  417: [
    {"title": "Q1250. Longest Palindromic Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-palindromic-subsequence/", "description": "Medium | Advanced Dynamic Programming"},
    {"title": "Q1251. Palindromic Substrings", "platform": "LeetCode", "url": "https://leetcode.com/problems/palindromic-substrings/", "description": "Medium | Advanced Dynamic Programming"},
    {"title": "Q1252. Longest Palindromic Substring", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-palindromic-substring/", "description": "Medium | Advanced Dynamic Programming"},
  ],

  // ==================== DAY 418 — Advanced Dynamic Programming ====================
  418: [
    {"title": "Q1253. Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/burst-balloons/", "description": "Hard | Advanced Dynamic Programming"},
    {"title": "Q1254. Minimum Cost to Cut a Stick", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", "description": "Hard | Advanced Dynamic Programming"},
    {"title": "Q1255. Matrix Chain Multiplication", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/", "description": "Hard | Advanced Dynamic Programming"},
  ],

  // ==================== DAY 419 — Advanced Dynamic Programming ====================
  419: [
    {"title": "Q1256. Partition Equal Subset Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/partition-equal-subset-sum/", "description": "Medium | Advanced Dynamic Programming"},
    {"title": "Q1257. Target Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/target-sum/", "description": "Medium | Advanced Dynamic Programming"},
    {"title": "Q1258. Ones and Zeroes", "platform": "LeetCode", "url": "https://leetcode.com/problems/ones-and-zeroes/", "description": "Medium | Advanced Dynamic Programming"},
  ],

  // ==================== DAY 420 — Advanced Dynamic Programming ====================
  420: [
    {"title": "Q1259. Coin Change II", "platform": "LeetCode", "url": "https://leetcode.com/problems/coin-change-ii/", "description": "Medium | Advanced Dynamic Programming"},
    {"title": "Q1260. Combination Sum IV", "platform": "LeetCode", "url": "https://leetcode.com/problems/combination-sum-iv/", "description": "Medium | Advanced Dynamic Programming"},
    {"title": "Q1261. Profitable Schemes", "platform": "LeetCode", "url": "https://leetcode.com/problems/profitable-schemes/", "description": "Hard | Advanced Dynamic Programming"},
  ],

  // ==================== DAY 421 — Advanced Dynamic Programming ====================
  421: [
    {"title": "Q1262. Best Time to Buy and Sell Stock III", "platform": "LeetCode", "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/", "description": "Hard | Advanced Dynamic Programming"},
    {"title": "Q1263. Best Time to Buy and Sell Stock IV", "platform": "LeetCode", "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", "description": "Hard | Advanced Dynamic Programming"},
    {"title": "Q1264. Best Time to Buy and Sell Stock with Cooldown", "platform": "LeetCode", "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", "description": "Medium | Advanced Dynamic Programming"},
  ],

  // ==================== DAY 422 — Advanced Dynamic Programming ====================
  422: [
    {"title": "Q1265. Dungeon Game", "platform": "LeetCode", "url": "https://leetcode.com/problems/dungeon-game/", "description": "Hard | Advanced Dynamic Programming"},
    {"title": "Q1266. Minimum Path Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-path-sum/", "description": "Medium | Advanced Dynamic Programming"},
    {"title": "Q1267. Cherry Pickup", "platform": "LeetCode", "url": "https://leetcode.com/problems/cherry-pickup/", "description": "Hard | Advanced Dynamic Programming"},
  ],

  // ==================== DAY 423 — Advanced Dynamic Programming ====================
  423: [
    {"title": "Q1268. Unique Paths III", "platform": "LeetCode", "url": "https://leetcode.com/problems/unique-paths-iii/", "description": "Hard | Advanced Dynamic Programming"},
    {"title": "Q1269. Number of Ways to Stay in the Same Place After Some Steps", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/", "description": "Hard | Advanced Dynamic Programming"},
    {"title": "Q1270. Student Attendance Record II", "platform": "LeetCode", "url": "https://leetcode.com/problems/student-attendance-record-ii/", "description": "Hard | Advanced Dynamic Programming"},
  ],
    // ==================== DAY 424 — Advanced Trees ====================
  424: [
    {"title": "Q1271. Binary Tree Maximum Path Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/", "description": "Hard | Advanced Trees"},
    {"title": "Q1272. Serialize and Deserialize Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", "description": "Hard | Advanced Trees"},
    {"title": "Q1273. Construct Binary Tree from Preorder and Inorder", "platform": "LeetCode", "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", "description": "Medium | Advanced Trees"},
  ],

  // ==================== DAY 425 — Advanced Trees ====================
  425: [
    {"title": "Q1274. Construct Binary Tree from Inorder and Postorder", "platform": "LeetCode", "url": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", "description": "Medium | Advanced Trees"},
    {"title": "Q1275. Binary Tree Cameras", "platform": "LeetCode", "url": "https://leetcode.com/problems/binary-tree-cameras/", "description": "Hard | Advanced Trees"},
    {"title": "Q1276. Recover Binary Search Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/recover-binary-search-tree/", "description": "Medium | Advanced Trees"},
  ],

  // ==================== DAY 426 — Advanced Trees ====================
  426: [
    {"title": "Q1277. Lowest Common Ancestor of a Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", "description": "Medium | Advanced Trees"},
    {"title": "Q1278. Lowest Common Ancestor of a BST", "platform": "LeetCode", "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", "description": "Medium | Advanced Trees"},
    {"title": "Q1279. All Nodes Distance K in Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/", "description": "Medium | Advanced Trees"},
  ],

  // ==================== DAY 427 — Advanced Trees ====================
  427: [
    {"title": "Q1280. Binary Tree Zigzag Level Order Traversal", "platform": "LeetCode", "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", "description": "Medium | Advanced Trees"},
    {"title": "Q1281. Vertical Order Traversal of a Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", "description": "Hard | Advanced Trees"},
    {"title": "Q1282. Maximum Width of Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-width-of-binary-tree/", "description": "Medium | Advanced Trees"},
  ],

  // ==================== DAY 428 — Advanced Trees ====================
  428: [
    {"title": "Q1283. Count Complete Tree Nodes", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-complete-tree-nodes/", "description": "Medium | Advanced Trees"},
    {"title": "Q1284. Flatten Binary Tree to Linked List", "platform": "LeetCode", "url": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", "description": "Medium | Advanced Trees"},
    {"title": "Q1285. Path Sum III", "platform": "LeetCode", "url": "https://leetcode.com/problems/path-sum-iii/", "description": "Medium | Advanced Trees"},
  ],

  // ==================== DAY 429 — Advanced Trees ====================
  429: [
    {"title": "Q1286. House Robber III", "platform": "LeetCode", "url": "https://leetcode.com/problems/house-robber-iii/", "description": "Medium | Advanced Trees"},
    {"title": "Q1287. Find Duplicate Subtrees", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-duplicate-subtrees/", "description": "Medium | Advanced Trees"},
    {"title": "Q1288. Maximum Difference Between Node and Ancestor", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/", "description": "Medium | Advanced Trees"},
  ],

  // ==================== DAY 430 — Advanced Trees ====================
  430: [
    {"title": "Q1289. Binary Search Tree Iterator", "platform": "LeetCode", "url": "https://leetcode.com/problems/binary-search-tree-iterator/", "description": "Medium | Advanced Trees"},
    {"title": "Q1290. Kth Smallest Element in a BST", "platform": "LeetCode", "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", "description": "Medium | Advanced Trees"},
    {"title": "Q1291. Two Sum IV", "platform": "LeetCode", "url": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/", "description": "Medium | Advanced Trees"},
  ],

  // ==================== DAY 431 — Advanced Trees ====================
  431: [
    {"title": "Q1292. Trim a Binary Search Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/trim-a-binary-search-tree/", "description": "Medium | Advanced Trees"},
    {"title": "Q1293. Delete Node in a BST", "platform": "LeetCode", "url": "https://leetcode.com/problems/delete-node-in-a-bst/", "description": "Medium | Advanced Trees"},
    {"title": "Q1294. Convert Sorted Array to BST", "platform": "LeetCode", "url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", "description": "Easy | Advanced Trees"},
  ],

  // ==================== DAY 432 — Advanced Trees ====================
  432: [
    {"title": "Q1295. Balance a Binary Search Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/balance-a-binary-search-tree/", "description": "Medium | Advanced Trees"},
    {"title": "Q1296. Maximum Sum BST in Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/", "description": "Hard | Advanced Trees"},
    {"title": "Q1297. Largest BST Subtree", "platform": "LeetCode", "url": "https://leetcode.com/problems/largest-bst-subtree/", "description": "Hard | Advanced Trees"},
  ],

  // ==================== DAY 433 — Advanced Trees ====================
  433: [
    {"title": "Q1298. Morris Inorder Traversal", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/", "description": "Medium | Advanced Trees"},
    {"title": "Q1299. Morris Preorder Traversal", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/preorder-tree-traversal-without-recursion-and-without-stack/", "description": "Medium | Advanced Trees"},
    {"title": "Q1300. Binary Tree to DLL", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/convert-a-given-binary-tree-to-doubly-linked-list/", "description": "Medium | Advanced Trees"},
  ],  // ==================== DAY 434 — Advanced Graph Algorithms ====================
  434: [
    {"title": "Q1301. Network Delay Time", "platform": "LeetCode", "url": "https://leetcode.com/problems/network-delay-time/", "description": "Medium | Dijkstra's Algorithm"},
    {"title": "Q1302. Cheapest Flights Within K Stops", "platform": "LeetCode", "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/", "description": "Medium | Bellman-Ford / BFS"},
    {"title": "Q1303. Path With Minimum Effort", "platform": "LeetCode", "url": "https://leetcode.com/problems/path-with-minimum-effort/", "description": "Medium | Dijkstra"}
  ],

  // ==================== DAY 435 — Advanced Graph Algorithms ====================
  435: [
    {"title": "Q1304. Swim in Rising Water", "platform": "LeetCode", "url": "https://leetcode.com/problems/swim-in-rising-water/", "description": "Hard | Dijkstra / Binary Search"},
    {"title": "Q1305. Minimum Cost to Make at Least One Valid Path in a Grid", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/", "description": "Hard | 0-1 BFS"},
    {"title": "Q1306. Shortest Path in Binary Matrix", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-path-in-binary-matrix/", "description": "Medium | BFS"}
  ],

  // ==================== DAY 436 — Advanced Graph Algorithms ====================
  436: [
    {"title": "Q1307. Word Ladder", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-ladder/", "description": "Hard | BFS"},
    {"title": "Q1308. Word Ladder II", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-ladder-ii/", "description": "Hard | BFS + DFS"},
    {"title": "Q1309. Open the Lock", "platform": "LeetCode", "url": "https://leetcode.com/problems/open-the-lock/", "description": "Medium | BFS"}
  ],

  // ==================== DAY 437 — Advanced Graph Algorithms ====================
  437: [
    {"title": "Q1310. Critical Connections in a Network", "platform": "LeetCode", "url": "https://leetcode.com/problems/critical-connections-in-a-network/", "description": "Hard | Tarjan's Algorithm"},
    {"title": "Q1311. Articulation Points", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/articulation-point-1/1", "description": "Hard | DFS / Tarjan"},
    {"title": "Q1312. Bridges in a Graph", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/bridge-in-a-graph/1", "description": "Hard | DFS / Tarjan"}
  ],

  // ==================== DAY 438 — Advanced Graph Algorithms ====================
  438: [
    {"title": "Q1313. Strongly Connected Components", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1", "description": "Hard | SCC"},
    {"title": "Q1314. Kosaraju’s Algorithm", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1", "description": "Hard | Kosaraju"},
    {"title": "Q1315. Tarjan’s SCC Algorithm", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/dsa/tarjan-algorithm-find-strongly-connected-components/", "description": "Hard | Tarjan"}
  ],

  // ==================== DAY 439 — Advanced Graph Algorithms ====================
  439: [
    {"title": "Q1316. Alien Dictionary", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/alien-dictionary/1", "description": "Hard | Topological Sort"},
    {"title": "Q1317. Course Schedule II", "platform": "LeetCode", "url": "https://leetcode.com/problems/course-schedule-ii/", "description": "Medium | Topological Sort"},
    {"title": "Q1318. Parallel Courses", "platform": "LeetCode", "url": "https://leetcode.com/problems/parallel-courses/", "description": "Medium | Topological Sort"}
  ],

  // ==================== DAY 440 — Advanced Graph Algorithms ====================
  440: [
    {"title": "Q1319. Minimum Height Trees", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-height-trees/", "description": "Medium | Topological Trimming"},
    {"title": "Q1320. Find Eventual Safe States", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-eventual-safe-states/", "description": "Medium | DFS / Topological Sort"},
    {"title": "Q1321. Loud and Rich", "platform": "LeetCode", "url": "https://leetcode.com/problems/loud-and-rich/", "description": "Medium | DFS / Graph"}
  ],

  // ==================== DAY 441 — Advanced Graph Algorithms ====================
  441: [
    {"title": "Q1322. Accounts Merge", "platform": "LeetCode", "url": "https://leetcode.com/problems/accounts-merge/", "description": "Medium | DSU"},
    {"title": "Q1323. Number of Islands II", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-islands-ii/", "description": "Hard | DSU"},
    {"title": "Q1324. Regions Cut By Slashes", "platform": "LeetCode", "url": "https://leetcode.com/problems/regions-cut-by-slashes/", "description": "Medium | DSU"}
  ],

  // ==================== DAY 442 — Advanced Graph Algorithms ====================
  442: [
    {"title": "Q1325. Redundant Connection", "platform": "LeetCode", "url": "https://leetcode.com/problems/redundant-connection/", "description": "Medium | DSU"},
    {"title": "Q1326. Redundant Connection II", "platform": "LeetCode", "url": "https://leetcode.com/problems/redundant-connection-ii/", "description": "Hard | DSU"},
    {"title": "Q1327. Minimize Malware Spread", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimize-malware-spread/", "description": "Hard | DSU"}
  ],

  // ==================== DAY 443 — Advanced Graph Algorithms ====================
  443: [
    {"title": "Q1328. Minimum Spanning Tree", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1", "description": "Medium | MST"},
    {"title": "Q1329. Kruskal’s Algorithm", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1", "description": "Medium | Kruskal"},
    {"title": "Q1330. Prim’s Algorithm", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1", "description": "Medium | Prim"}
  ],
    // ==================== DAY 444 — Pattern 46: Advanced Trie, Strings & Pattern Matching ====================
  444: [
    {"title": "Q1331. Implement Trie (Prefix Tree)", "platform": "LeetCode", "url": "https://leetcode.com/problems/implement-trie-prefix-tree/", "description": "Medium | Trie"},
    {"title": "Q1332. Design Add and Search Words Data Structure", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/", "description": "Medium | Trie + DFS"},
    {"title": "Q1333. Word Search II", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-search-ii/", "description": "Hard | Trie + Backtracking"}
  ],

  // ==================== DAY 445 — Pattern 46: Advanced Trie, Strings & Pattern Matching ====================
  445: [
    {"title": "Q1334. Maximum XOR of Two Numbers in an Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", "description": "Medium | Bitwise Trie"},
    {"title": "Q1335. Maximum XOR With an Element From Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/", "description": "Hard | Bitwise Trie"},
    {"title": "Q1336. Longest Word in Dictionary", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-word-in-dictionary/", "description": "Medium | Trie"}
  ],

  // ==================== DAY 446 — Pattern 46: Advanced Trie, Strings & Pattern Matching ====================
  446: [
    {"title": "Q1337. Shortest Unique Prefix", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/shortest-unique-prefix-for-every-word/1", "description": "Medium | Trie"},
    {"title": "Q1338. Search Suggestions System", "platform": "LeetCode", "url": "https://leetcode.com/problems/search-suggestions-system/", "description": "Medium | Trie"},
    {"title": "Q1339. Replace Words", "platform": "LeetCode", "url": "https://leetcode.com/problems/replace-words/", "description": "Medium | Trie"}
  ],

  // ==================== DAY 447 — Pattern 46: Advanced Trie, Strings & Pattern Matching ====================
  447: [
    {"title": "Q1340. Longest Common Prefix", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-common-prefix/", "description": "Easy | String"},
    {"title": "Q1341. KMP Pattern Matching", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/search-pattern0205/1", "description": "Medium | KMP"},
    {"title": "Q1342. Z Algorithm", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/", "description": "Medium | Z-Algorithm"}
  ],

  // ==================== DAY 448 — Pattern 46: Advanced Trie, Strings & Pattern Matching ====================
  448: [
    {"title": "Q1343. Find the Index of the First Occurrence in a String", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", "description": "Easy | String Matching"},
    {"title": "Q1344. Repeated String Match", "platform": "LeetCode", "url": "https://leetcode.com/problems/repeated-string-match/", "description": "Medium | String"},
    {"title": "Q1345. Shortest Palindrome", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-palindrome/", "description": "Hard | KMP"}
  ],

  // ==================== DAY 449 — Pattern 46: Advanced Trie, Strings & Pattern Matching ====================
  449: [
    {"title": "Q1346. Longest Happy Prefix", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-happy-prefix/", "description": "Hard | KMP"},
    {"title": "Q1347. Find All Good Strings", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-all-good-strings/", "description": "Hard | KMP + DP"},
    {"title": "Q1348. String Matching in an Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/string-matching-in-an-array/", "description": "Easy | String"}
  ],

  // ==================== DAY 450 — Pattern 46: Advanced Trie, Strings & Pattern Matching ====================
  450: [
    {"title": "Q1349. Palindrome Pairs", "platform": "LeetCode", "url": "https://leetcode.com/problems/palindrome-pairs/", "description": "Hard | Trie + Palindrome"},
    {"title": "Q1350. Palindromic Substrings", "platform": "LeetCode", "url": "https://leetcode.com/problems/palindromic-substrings/", "description": "Medium | Expand Around Center"},
    {"title": "Q1351. Longest Palindromic Substring", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-palindromic-substring/", "description": "Medium | String"}
  ],

  // ==================== DAY 451 — Pattern 46: Advanced Trie, Strings & Pattern Matching ====================
  451: [
    {"title": "Q1352. Manacher’s Algorithm", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/manachers-algorithm-linear-time-longest-palindromic-substring-part-1/", "description": "Hard | Manacher"},
    {"title": "Q1353. Longest Palindromic Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-palindromic-subsequence/", "description": "Medium | DP"},
    {"title": "Q1354. Minimum Insertion Steps to Make a String Palindrome", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/", "description": "Medium | DP"}
  ],

  // ==================== DAY 452 — Pattern 46: Advanced Trie, Strings & Pattern Matching ====================
  452: [
    {"title": "Q1355. Edit Distance", "platform": "LeetCode", "url": "https://leetcode.com/problems/edit-distance/", "description": "Hard | DP"},
    {"title": "Q1356. Distinct Subsequences", "platform": "LeetCode", "url": "https://leetcode.com/problems/distinct-subsequences/", "description": "Hard | DP"},
    {"title": "Q1357. Regular Expression Matching", "platform": "LeetCode", "url": "https://leetcode.com/problems/regular-expression-matching/", "description": "Hard | DP"}
  ],

  // ==================== DAY 453 — Pattern 46: Advanced Trie, Strings & Pattern Matching ====================
  453: [
    {"title": "Q1358. Wildcard Matching", "platform": "LeetCode", "url": "https://leetcode.com/problems/wildcard-matching/", "description": "Hard | DP"},
    {"title": "Q1359. Scramble String", "platform": "LeetCode", "url": "https://leetcode.com/problems/scramble-string/", "description": "Hard | DP"},
    {"title": "Q1360. Minimum Window Substring", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-window-substring/", "description": "Hard | Sliding Window"}
  ],
    // ==================== DAY 454 — Pattern 47: Advanced Greedy & Optimization ====================
  454: [
    {"title": "Q1361. Jump Game II", "platform": "LeetCode", "url": "https://leetcode.com/problems/jump-game-ii/", "description": "Medium | Greedy"},
    {"title": "Q1362. Jump Game IV", "platform": "LeetCode", "url": "https://leetcode.com/problems/jump-game-iv/", "description": "Hard | BFS"},
    {"title": "Q1363. Minimum Number of Refueling Stops", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-refueling-stops/", "description": "Hard | Greedy + Heap"}
  ],

  // ==================== DAY 455 — Pattern 47: Advanced Greedy & Optimization ====================
  455: [
    {"title": "Q1364. Gas Station", "platform": "LeetCode", "url": "https://leetcode.com/problems/gas-station/", "description": "Medium | Greedy"},
    {"title": "Q1365. Candy", "platform": "LeetCode", "url": "https://leetcode.com/problems/candy/", "description": "Hard | Greedy"},
    {"title": "Q1366. Queue Reconstruction by Height", "platform": "LeetCode", "url": "https://leetcode.com/problems/queue-reconstruction-by-height/", "description": "Medium | Greedy + Sorting"}
  ],

  // ==================== DAY 456 — Pattern 47: Advanced Greedy & Optimization ====================
  456: [
    {"title": "Q1367. Minimum Cost to Hire K Workers", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/", "description": "Hard | Greedy + Heap"},
    {"title": "Q1368. IPO", "platform": "LeetCode", "url": "https://leetcode.com/problems/ipo/", "description": "Hard | Greedy + Heap"},
    {"title": "Q1369. Maximum Performance of a Team", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-performance-of-a-team/", "description": "Hard | Greedy + Heap"}
  ],

  // ==================== DAY 457 — Pattern 47: Advanced Greedy & Optimization ====================
  457: [
    {"title": "Q1370. Task Scheduler", "platform": "LeetCode", "url": "https://leetcode.com/problems/task-scheduler/", "description": "Medium | Greedy + Heap"},
    {"title": "Q1371. Rearrange String K Distance Apart", "platform": "LeetCode", "url": "https://leetcode.com/problems/rearrange-string-k-distance-apart/", "description": "Hard | Greedy + Heap"},
    {"title": "Q1372. Rearrange Barcodes", "platform": "LeetCode", "url": "https://leetcode.com/problems/distant-barcodes/", "description": "Medium | Greedy + Heap"}
  ],

  // ==================== DAY 458 — Pattern 47: Advanced Greedy & Optimization ====================
  458: [
    {"title": "Q1373. Maximum Units on a Truck", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-units-on-a-truck/", "description": "Easy | Greedy"},
    {"title": "Q1374. Minimum Cost to Connect Sticks", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-connect-sticks/", "description": "Medium | Greedy + Heap"},
    {"title": "Q1375. Huffman Encoding", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/huffman-encoding/1", "description": "Medium | Greedy"}
  ],

  // ==================== DAY 459 — Pattern 47: Advanced Greedy & Optimization ====================
  459: [
    {"title": "Q1376. Partition Labels", "platform": "LeetCode", "url": "https://leetcode.com/problems/partition-labels/", "description": "Medium | Greedy"},
    {"title": "Q1377. Maximum Length of Pair Chain", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-length-of-pair-chain/", "description": "Medium | Greedy"},
    {"title": "Q1378. Wiggle Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/wiggle-subsequence/", "description": "Medium | Greedy + DP"}
  ],

  // ==================== DAY 460 — Pattern 47: Advanced Greedy & Optimization ====================
  460: [
    {"title": "Q1379. Minimum Deletions to Make Character Frequencies Unique", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/", "description": "Medium | Greedy"},
    {"title": "Q1380. Minimum Number of Operations to Make Array Continuous", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/", "description": "Hard | Sorting + Sliding Window"},
    {"title": "Q1381. Maximum Gap", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-gap/", "description": "Medium | Bucket Sort"}
  ],

  // ==================== DAY 461 — Pattern 47: Advanced Greedy & Optimization ====================
  461: [
    {"title": "Q1382. Minimum Cost to Make Array Equal", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-make-array-equal/", "description": "Hard | Greedy + Median"},
    {"title": "Q1383. Minimum Cost to Cut a Stick", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", "description": "Hard | Interval DP"},
    {"title": "Q1384. Minimum Cost to Merge Stones", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-merge-stones/", "description": "Hard | DP"}
  ],

  // ==================== DAY 462 — Pattern 47: Advanced Greedy & Optimization ====================
  462: [
    {"title": "Q1385. Maximum Number of Events That Can Be Attended", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/", "description": "Medium | Greedy + Heap"},
    {"title": "Q1386. Maximum Number of Events That Can Be Attended II", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/", "description": "Hard | DP + Binary Search"},
    {"title": "Q1387. Meeting Rooms III", "platform": "LeetCode", "url": "https://leetcode.com/problems/meeting-rooms-iii/", "description": "Hard | Greedy + Heap"}
  ],

  // ==================== DAY 463 — Pattern 47: Advanced Greedy & Optimization ====================
  463: [
    {"title": "Q1388. Minimum Platforms", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1", "description": "Medium | Greedy + Sorting"},
    {"title": "Q1389. Job Sequencing Problem", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1", "description": "Medium | Greedy"},
    {"title": "Q1390. Fractional Knapsack", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1", "description": "Medium | Greedy"}
  ],

  // ==================== DAY 464 — Pattern 48: Advanced Bitmasking & State Compression ====================
  464: [
    {"title": "Q1391. Single Number III", "platform": "LeetCode", "url": "https://leetcode.com/problems/single-number-iii/", "description": "Medium | Bit Manipulation"},
    {"title": "Q1392. Bitwise AND of Numbers Range", "platform": "LeetCode", "url": "https://leetcode.com/problems/bitwise-and-of-numbers-range/", "description": "Medium | Bit Manipulation"},
    {"title": "Q1393. Maximum XOR of Two Numbers", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", "description": "Medium | Bitwise Trie"}
  ],

  // ==================== DAY 465 — Pattern 48: Advanced Bitmasking & State Compression ====================
  465: [
    {"title": "Q1394. Counting Bits", "platform": "LeetCode", "url": "https://leetcode.com/problems/counting-bits/", "description": "Easy | Bit Manipulation + DP"},
    {"title": "Q1395. Sum of Two Integers", "platform": "LeetCode", "url": "https://leetcode.com/problems/sum-of-two-integers/", "description": "Medium | Bit Manipulation"},
    {"title": "Q1396. Minimum Flips to Make a OR b Equal to c", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/", "description": "Medium | Bit Manipulation"}
  ],

  // ==================== DAY 466 — Pattern 48: Advanced Bitmasking & State Compression ====================
  466: [
    {"title": "Q1397. Maximum Length of a Concatenated String with Unique Characters", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/", "description": "Medium | Bitmask + Backtracking"},
    {"title": "Q1398. Smallest Sufficient Team", "platform": "LeetCode", "url": "https://leetcode.com/problems/smallest-sufficient-team/", "description": "Hard | Bitmask DP"},
    {"title": "Q1399. Parallel Courses II", "platform": "LeetCode", "url": "https://leetcode.com/problems/parallel-courses-ii/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 467 — Pattern 48: Advanced Bitmasking & State Compression ====================
  467: [
    {"title": "Q1400. Maximum Students Taking Exam", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-students-taking-exam/", "description": "Hard | Bitmask DP"},
    {"title": "Q1401. Can I Win", "platform": "LeetCode", "url": "https://leetcode.com/problems/can-i-win/", "description": "Medium | Bitmask + Memoization"},
    {"title": "Q1402. Flip Game II", "platform": "LeetCode", "url": "https://leetcode.com/problems/flip-game-ii/", "description": "Medium | Game Theory + Memoization"}
  ],

  // ==================== DAY 468 — Pattern 48: Advanced Bitmasking & State Compression ====================
  468: [
    {"title": "Q1403. Beautiful Arrangement", "platform": "LeetCode", "url": "https://leetcode.com/problems/beautiful-arrangement/", "description": "Medium | Bitmask + Backtracking"},
    {"title": "Q1404. Matchsticks to Square", "platform": "LeetCode", "url": "https://leetcode.com/problems/matchsticks-to-square/", "description": "Medium | Bitmask + Backtracking"},
    {"title": "Q1405. Partition to K Equal Sum Subsets", "platform": "LeetCode", "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/", "description": "Medium | Bitmask + Backtracking"}
  ],

  // ==================== DAY 469 — Pattern 48: Advanced Bitmasking & State Compression ====================
  469: [
    {"title": "Q1406. Traveling Salesman Problem", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/travelling-salesman-problem/1", "description": "Hard | Bitmask DP"},
    {"title": "Q1407. Minimum Cost Hamiltonian Cycle", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/travelling-salesman-problem-tsp-implementation/", "description": "Hard | Bitmask DP"},
    {"title": "Q1408. Hamiltonian Path", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/hamiltonian-path/1", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 470 — Pattern 48: Advanced Bitmasking & State Compression ====================
  470: [
    {"title": "Q1409. Number of Ways to Wear Different Hats", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/", "description": "Hard | Bitmask DP"},
    {"title": "Q1410. Number of Ways to Assign Hats", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/", "description": "Hard | Bitmask DP"},
    {"title": "Q1411. Maximum Compatibility Score Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-compatibility-score-sum/", "description": "Medium | Bitmask DP"}
  ],

  // ==================== DAY 471 — Pattern 48: Advanced Bitmasking & State Compression ====================
  471: [
    {"title": "Q1412. Minimum XOR Sum of Two Arrays", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/", "description": "Hard | Bitmask DP"},
    {"title": "Q1413. Count Ways to Build Rooms in an Ant Colony", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/", "description": "Hard | Tree DP"},
    {"title": "Q1414. Number of Ways to Assign Workers", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 472 — Pattern 48: Advanced Bitmasking & State Compression ====================
  472: [
    {"title": "Q1415. Maximum AND Sum of Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-and-sum-of-array/", "description": "Hard | Bitmask DP"},
    {"title": "Q1416. Minimum Number of Work Sessions", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/", "description": "Medium | Bitmask DP"},
    {"title": "Q1417. Maximum Score from Performing Multiplication Operations", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/", "description": "Medium | DP + State Compression"}
  ],

  // ==================== DAY 473 — Pattern 48: Advanced Bitmasking & State Compression ====================
  473: [
    {"title": "Q1418. Bitmask DP: Assignment Problem", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/assignment-problem-using-bitmasking/", "description": "Hard | Bitmask DP"},
    {"title": "Q1419. Bitmask DP: Minimum Cost Matching", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/assignment-problem-using-bitmasking/", "description": "Hard | Bitmask DP"},
    {"title": "Q1420. Bitmask DP: Subset Partition", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/partition-problem-dp-18/", "description": "Hard | Bitmask DP"}
  ],
    // ==================== DAY 474 — Pattern 49: Advanced Data Structures & Range Queries ====================
  474: [
    {"title": "Q1421. Range Sum Query — Mutable", "platform": "LeetCode", "url": "https://leetcode.com/problems/range-sum-query-mutable/", "description": "Medium | Segment Tree / Fenwick Tree"},
    {"title": "Q1422. Count of Smaller Numbers After Self", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", "description": "Hard | Merge Sort / Fenwick Tree"},
    {"title": "Q1423. Reverse Pairs", "platform": "LeetCode", "url": "https://leetcode.com/problems/reverse-pairs/", "description": "Hard | Merge Sort"}
  ],

  // ==================== DAY 475 — Pattern 49: Advanced Data Structures & Range Queries ====================
  475: [
    {"title": "Q1424. Count of Range Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-of-range-sum/", "description": "Hard | Merge Sort"},
    {"title": "Q1425. Create Sorted Array through Instructions", "platform": "LeetCode", "url": "https://leetcode.com/problems/create-sorted-array-through-instructions/", "description": "Hard | Fenwick Tree"},
    {"title": "Q1426. Range Module", "platform": "LeetCode", "url": "https://leetcode.com/problems/range-module/", "description": "Hard | Segment Tree"}
  ],

  // ==================== DAY 476 — Pattern 49: Advanced Data Structures & Range Queries ====================
  476: [
    {"title": "Q1427. My Calendar I", "platform": "LeetCode", "url": "https://leetcode.com/problems/my-calendar-i/", "description": "Medium | Ordered Map"},
    {"title": "Q1428. My Calendar II", "platform": "LeetCode", "url": "https://leetcode.com/problems/my-calendar-ii/", "description": "Medium | Sweep Line"},
    {"title": "Q1429. My Calendar III", "platform": "LeetCode", "url": "https://leetcode.com/problems/my-calendar-iii/", "description": "Hard | Sweep Line"}
  ],

  // ==================== DAY 477 — Pattern 49: Advanced Data Structures & Range Queries ====================
  477: [
    {"title": "Q1430. Falling Squares", "platform": "LeetCode", "url": "https://leetcode.com/problems/falling-squares/", "description": "Hard | Segment Tree"},
    {"title": "Q1431. The Skyline Problem", "platform": "LeetCode", "url": "https://leetcode.com/problems/the-skyline-problem/", "description": "Hard | Sweep Line + Heap"},
    {"title": "Q1432. Rectangle Area II", "platform": "LeetCode", "url": "https://leetcode.com/problems/rectangle-area-ii/", "description": "Hard | Sweep Line"}
  ],

  // ==================== DAY 478 — Pattern 49: Advanced Data Structures & Range Queries ====================
  478: [
    {"title": "Q1433. Design Skiplist", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-skiplist/", "description": "Hard | Skip List"},
    {"title": "Q1434. Design a Leaderboard", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-a-leaderboard/", "description": "Medium | Data Structure Design"},
    {"title": "Q1435. Design In-Memory File System", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-in-memory-file-system/", "description": "Hard | Trie"}
  ],

  // ==================== DAY 479 — Pattern 49: Advanced Data Structures & Range Queries ====================
  479: [
    {"title": "Q1436. Design Twitter", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-twitter/", "description": "Medium | Heap + Hash Map"},
    {"title": "Q1437. LFU Cache", "platform": "LeetCode", "url": "https://leetcode.com/problems/lfu-cache/", "description": "Hard | Hash Map + Doubly Linked List"},
    {"title": "Q1438. LRU Cache", "platform": "LeetCode", "url": "https://leetcode.com/problems/lru-cache/", "description": "Medium | Hash Map + Doubly Linked List"}
  ],

  // ==================== DAY 480 — Pattern 49: Advanced Data Structures & Range Queries ====================
  480: [
    {"title": "Q1439. All O’one Data Structure", "platform": "LeetCode", "url": "https://leetcode.com/problems/all-oone-data-structure/", "description": "Hard | Hash Map + Doubly Linked List"},
    {"title": "Q1440. Insert Delete GetRandom O(1)", "platform": "LeetCode", "url": "https://leetcode.com/problems/insert-delete-getrandom-o1/", "description": "Medium | Hash Map"},
    {"title": "Q1441. Insert Delete GetRandom O(1) — Duplicates", "platform": "LeetCode", "url": "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/", "description": "Hard | Hash Map"}
  ],

  // ==================== DAY 481 — Pattern 49: Advanced Data Structures & Range Queries ====================
  481: [
    {"title": "Q1442. Design Search Autocomplete System", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-search-autocomplete-system/", "description": "Hard | Trie"},
    {"title": "Q1443. Design Ternary Search Tree", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/ternary-search-tree/", "description": "Hard | Ternary Search Tree"},
    {"title": "Q1444. Design a Data Structure for Median", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/", "description": "Hard | Two Heaps"}
  ],

  // ==================== DAY 482 — Pattern 49: Advanced Data Structures & Range Queries ====================
  482: [
    {"title": "Q1445. Sliding Window Median", "platform": "LeetCode", "url": "https://leetcode.com/problems/sliding-window-median/", "description": "Hard | Two Heaps"},
    {"title": "Q1446. Find Median from Data Stream", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-median-from-data-stream/", "description": "Hard | Two Heaps"},
    {"title": "Q1447. IPO", "platform": "LeetCode", "url": "https://leetcode.com/problems/ipo/", "description": "Hard | Greedy + Heap"}
  ],

  // ==================== DAY 483 — Pattern 49: Advanced Data Structures & Range Queries ====================
  483: [
    {"title": "Q1448. Segment Tree: Range Minimum Query", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/segment-tree-set-1-range-minimum-query/", "description": "Medium | Segment Tree"},
    {"title": "Q1449. Segment Tree: Lazy Propagation", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/lazy-propagation-in-segment-tree/", "description": "Hard | Segment Tree"},
    {"title": "Q1450. Fenwick Tree: Range Sum Query", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/", "description": "Medium | Fenwick Tree"}
  ],

  // ==================== DAY 484 — Pattern 50: Competitive Programming & Codeforces Practice ====================
  484: [
    {"title": "Q1451. Two Sum", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Easy | Hashing"},
    {"title": "Q1452. Prefix Sum Queries", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Medium | Prefix Sum"},
    {"title": "Q1453. Frequency Counting", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Medium | Frequency Map"}
  ],

  // ==================== DAY 485 — Pattern 50: Competitive Programming & Codeforces Practice ====================
  485: [
    {"title": "Q1454. Binary Search on Answer", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Medium | Binary Search"},
    {"title": "Q1455. Greedy Array Operations", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Medium | Greedy"},
    {"title": "Q1456. Two Pointers Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Medium | Two Pointers"}
  ],

  // ==================== DAY 486 — Pattern 50: Competitive Programming & Codeforces Practice ====================
  486: [
    {"title": "Q1457. Divisibility & Number Theory", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Medium | Number Theory"},
    {"title": "Q1458. GCD/LCM Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Medium | GCD / LCM"},
    {"title": "Q1459. Modular Arithmetic", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Medium | Modular Arithmetic"}
  ],

  // ==================== DAY 487 — Pattern 50: Competitive Programming & Codeforces Practice ====================
  487: [
    {"title": "Q1460. Constructive Algorithms", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Medium | Constructive"},
    {"title": "Q1461. Permutation Construction", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Medium | Permutations"},
    {"title": "Q1462. Matrix Construction", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Medium | Matrix"}
  ],

  // ==================== DAY 488 — Pattern 50: Competitive Programming & Codeforces Practice ====================
  488: [
    {"title": "Q1463. Tree DP Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Tree DP"},
    {"title": "Q1464. Graph Traversal Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Medium | Graph Traversal"},
    {"title": "Q1465. Shortest Path Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Shortest Path"}
  ],

  // ==================== DAY 489 — Pattern 50: Competitive Programming & Codeforces Practice ====================
  489: [
    {"title": "Q1466. DP on Strings", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | String DP"},
    {"title": "Q1467. Knapsack Variation", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Knapsack DP"},
    {"title": "Q1468. Bitmask DP Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 490 — Pattern 50: Competitive Programming & Codeforces Practice ====================
  490: [
    {"title": "Q1469. Segment Tree Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Segment Tree"},
    {"title": "Q1470. Fenwick Tree Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Fenwick Tree"},
    {"title": "Q1471. Sparse Table Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Sparse Table"}
  ],

  // ==================== DAY 491 — Pattern 50: Competitive Programming & Codeforces Practice ====================
  491: [
    {"title": "Q1472. Interactive Problem Practice", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Interactive"},
    {"title": "Q1473. Game Theory Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Game Theory"},
    {"title": "Q1474. Probability & Expected Value", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Probability"}
  ],

  // ==================== DAY 492 — Pattern 50: Competitive Programming & Codeforces Practice ====================
  492: [
    {"title": "Q1475. Advanced Combinatorics", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Combinatorics"},
    {"title": "Q1476. Advanced Geometry", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Geometry"},
    {"title": "Q1477. Advanced Strings", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | String Algorithms"}
  ],

  // ==================== DAY 493 — Pattern 50: Competitive Programming & Codeforces Practice ====================
  493: [
    {"title": "Q1478. Codeforces 1600+ Rated Problem", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=1600-", "description": "Hard | Rating 1600+"},
    {"title": "Q1479. Codeforces 1800+ Rated Problem", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=1800-", "description": "Hard | Rating 1800+"},
    {"title": "Q1480. Codeforces 2000+ Rated Problem", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=2000-", "description": "Hard | Rating 2000+"}
  ],  // ==================== DAY 494 — Pattern 51: Expert-Level Mixed DSA & Interview Challenge ====================
  494: [
    {"title": "Q1481. N-Queens", "platform": "LeetCode", "url": "https://leetcode.com/problems/n-queens/", "description": "Hard | Backtracking"},
    {"title": "Q1482. N-Queens II", "platform": "LeetCode", "url": "https://leetcode.com/problems/n-queens-ii/", "description": "Hard | Backtracking"},
    {"title": "Q1483. Sudoku Solver", "platform": "LeetCode", "url": "https://leetcode.com/problems/sudoku-solver/", "description": "Hard | Backtracking"}
  ],

  // ==================== DAY 495 — Pattern 51: Expert-Level Mixed DSA & Interview Challenge ====================
  495: [
    {"title": "Q1484. Word Search", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-search/", "description": "Medium | Backtracking"},
    {"title": "Q1485. Expression Add Operators", "platform": "LeetCode", "url": "https://leetcode.com/problems/expression-add-operators/", "description": "Hard | Backtracking"},
    {"title": "Q1486. Remove Boxes", "platform": "LeetCode", "url": "https://leetcode.com/problems/remove-boxes/", "description": "Hard | 3D DP"}
  ],

  // ==================== DAY 496 — Pattern 51: Expert-Level Mixed DSA & Interview Challenge ====================
  496: [
    {"title": "Q1487. Freedom Trail", "platform": "LeetCode", "url": "https://leetcode.com/problems/freedom-trail/", "description": "Hard | DP"},
    {"title": "Q1488. Strange Printer", "platform": "LeetCode", "url": "https://leetcode.com/problems/strange-printer/", "description": "Hard | Interval DP"},
    {"title": "Q1489. Minimum Insertion Steps to Make a String Palindrome", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/", "description": "Hard | DP"}
  ],

  // ==================== DAY 497 — Pattern 51: Expert-Level Mixed DSA & Interview Challenge ====================
  497: [
    {"title": "Q1490. Shortest Path Visiting All Nodes", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/", "description": "Hard | BFS + Bitmask"},
    {"title": "Q1491. Minimum Cost to Connect All Points", "platform": "LeetCode", "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/", "description": "Medium | MST"},
    {"title": "Q1492. Reconstruct Itinerary", "platform": "LeetCode", "url": "https://leetcode.com/problems/reconstruct-itinerary/", "description": "Hard | Eulerian Path"}
  ],

  // ==================== DAY 498 — Pattern 51: Expert-Level Mixed DSA & Interview Challenge ====================
  498: [
    {"title": "Q1493. Critical Connections", "platform": "LeetCode", "url": "https://leetcode.com/problems/critical-connections-in-a-network/", "description": "Hard | Tarjan's Algorithm"},
    {"title": "Q1494. Maximum Flow Problem", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/problems/maximum-flow-problem/1", "description": "Hard | Max Flow"},
    {"title": "Q1495. Min Cost Max Flow", "platform": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/min-cost-max-flow/", "description": "Hard | Min Cost Max Flow"}
  ],

  // ==================== DAY 499 — Pattern 51: Expert-Level Mixed DSA & Interview Challenge ====================
  499: [
    {"title": "Q1496. Maximum Profit in Job Scheduling", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", "description": "Hard | DP + Binary Search"},
    {"title": "Q1497. Minimum Difficulty of a Job Schedule", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/", "description": "Hard | DP"},
    {"title": "Q1498. Allocate Mailboxes", "platform": "LeetCode", "url": "https://leetcode.com/problems/allocate-mailboxes/", "description": "Hard | DP"}
  ],

  // ==================== DAY 500 — Pattern 51: Expert-Level Mixed DSA & Interview Challenge ====================
  500: [
    {"title": "Q1499. Maximum Number of Points with Cost", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-number-of-points-with-cost/", "description": "Medium | DP Optimization"},
    {"title": "Q1500. Maximum Value of K Coins From Piles", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/", "description": "Hard | Knapsack DP"},
    {"title": "Q1501. Minimum Cost to Merge K Sorted Lists", "platform": "LeetCode", "url": "https://leetcode.com/problems/merge-k-sorted-lists/", "description": "Hard | Heap"}
  ],

  // ==================== DAY 501 — Pattern 51: Expert-Level Mixed DSA & Interview Challenge ====================
  501: [
    {"title": "Q1502. Median of Two Sorted Arrays", "platform": "LeetCode", "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/", "description": "Hard | Binary Search"},
    {"title": "Q1503. Largest Rectangle in Histogram", "platform": "LeetCode", "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/", "description": "Hard | Monotonic Stack"},
    {"title": "Q1504. Trapping Rain Water II", "platform": "LeetCode", "url": "https://leetcode.com/problems/trapping-rain-water-ii/", "description": "Hard | Heap + BFS"}
  ],

  // ==================== DAY 502 — Pattern 51: Expert-Level Mixed DSA & Interview Challenge ====================
  502: [
    {"title": "Q1505. Maximum Profit with Job Scheduling", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", "description": "Hard | DP + Binary Search"},
    {"title": "Q1506. Minimum Number of Taps to Open to Water a Garden", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/", "description": "Hard | Greedy"},
    {"title": "Q1507. Minimum Cost to Make at Least One Valid Path", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/", "description": "Hard | 0-1 BFS"}
  ],

  // ==================== DAY 503 — Pattern 51: Expert-Level Mixed DSA & Interview Challenge ====================
  503: [
    {"title": "Q1508. Longest Increasing Path in a Matrix", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/", "description": "Hard | DFS + Memoization"},
    {"title": "Q1509. Maximum Profit in a Job Scheduling Challenge", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", "description": "Hard | DP + Binary Search"},
    {"title": "Q1510. Final Mixed Advanced DSA Challenge", "platform": "LeetCode", "url": "https://leetcode.com/problemset/", "description": "Hard | Mixed Advanced DSA"}
  ],
    // ==================== DAY 504 — Advanced DP & Optimization ====================
  504: [
    {"title": "Q1511. Maximum Profit in Job Scheduling", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", "description": "Hard | DP, Binary Search"},
    {"title": "Q1512. Minimum Difficulty of a Job Schedule", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/", "description": "Hard | DP"},
    {"title": "Q1513. Allocate Mailboxes", "platform": "LeetCode", "url": "https://leetcode.com/problems/allocate-mailboxes/", "description": "Hard | DP"}
  ],

  // ==================== DAY 505 — Advanced DP & Optimization ====================
  505: [
    {"title": "Q1514. Frog Jump", "platform": "LeetCode", "url": "https://leetcode.com/problems/frog-jump/", "description": "Hard | DP"},
    {"title": "Q1515. Number of Ways to Form a Target String", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/", "description": "Hard | DP"},
    {"title": "Q1516. Minimum Cost to Merge Stones", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-merge-stones/", "description": "Hard | Interval DP"}
  ],

  // ==================== DAY 506 — Advanced DP & Optimization ====================
  506: [
    {"title": "Q1517. Minimum Falling Path Sum II", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-falling-path-sum-ii/", "description": "Hard | DP"},
    {"title": "Q1518. Maximum Dot Product of Two Subsequences", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-dot-product-of-two-subsequences/", "description": "Hard | DP"},
    {"title": "Q1519. Minimum ASCII Delete Sum for Two Strings", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/", "description": "Medium | DP, Strings"}
  ],

  // ==================== DAY 507 — Advanced DP & Optimization ====================
  507: [
    {"title": "Q1520. Maximize Score After N Operations", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximize-score-after-n-operations/", "description": "Hard | Bitmask DP"},
    {"title": "Q1521. Maximum Students Taking Exam", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-students-taking-exam/", "description": "Hard | Bitmask DP"},
    {"title": "Q1522. Number of Ways to Paint N × 3 Grid", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/", "description": "Hard | DP"}
  ],

  // ==================== DAY 508 — Advanced DP & Optimization ====================
  508: [
    {"title": "Q1523. Minimum Cost to Cut a Stick", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", "description": "Hard | Interval DP"},
    {"title": "Q1524. Strange Printer", "platform": "LeetCode", "url": "https://leetcode.com/problems/strange-printer/", "description": "Hard | Interval DP"},
    {"title": "Q1525. Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/burst-balloons/", "description": "Hard | Interval DP"}
  ],

  // ==================== DAY 509 — Advanced DP & Optimization ====================
  509: [
    {"title": "Q1526. Palindrome Partitioning II", "platform": "LeetCode", "url": "https://leetcode.com/problems/palindrome-partitioning-ii/", "description": "Hard | DP"},
    {"title": "Q1527. Palindrome Partitioning III", "platform": "LeetCode", "url": "https://leetcode.com/problems/palindrome-partitioning-iii/", "description": "Hard | DP"},
    {"title": "Q1528. Palindrome Partitioning IV", "platform": "LeetCode", "url": "https://leetcode.com/problems/palindrome-partitioning-iv/", "description": "Hard | DP"}
  ],

  // ==================== DAY 510 — Advanced DP & Optimization ====================
  510: [
    {"title": "Q1529. Maximum Length of Repeated Subarray", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-length-of-repeated-subarray/", "description": "Medium | DP"},
    {"title": "Q1530. Longest Common Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-common-subsequence/", "description": "Medium | DP"},
    {"title": "Q1531. Shortest Common Supersequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-common-supersequence/", "description": "Hard | DP"}
  ],

  // ==================== DAY 511 — Advanced DP & Optimization ====================
  511: [
    {"title": "Q1532. Minimum Insertion Steps to Make a String Palindrome", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/", "description": "Hard | DP"},
    {"title": "Q1533. Edit Distance", "platform": "LeetCode", "url": "https://leetcode.com/problems/edit-distance/", "description": "Hard | DP"},
    {"title": "Q1534. Distinct Subsequences", "platform": "LeetCode", "url": "https://leetcode.com/problems/distinct-subsequences/", "description": "Hard | DP"}
  ],

  // ==================== DAY 512 — Advanced DP & Optimization ====================
  512: [
    {"title": "Q1535. Maximum Number of Points with Cost", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-number-of-points-with-cost/", "description": "Medium | DP"},
    {"title": "Q1536. Maximum Value of K Coins From Piles", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/", "description": "Hard | DP"},
    {"title": "Q1537. Minimum Cost to Make at Least One Valid Path in a Grid", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/", "description": "Hard | DP, Graph"}
  ],

  // ==================== DAY 513 — Advanced DP & Optimization ====================
  513: [
    {"title": "Q1538. Maximum Profit in a Job Scheduling Challenge", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", "description": "Hard | DP"},
    {"title": "Q1539. Maximum Profit with K Transactions", "platform": "LeetCode", "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", "description": "Hard | DP"},
    {"title": "Q1540. Minimum Number of Refueling Stops", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-refueling-stops/", "description": "Hard | Greedy, DP"}
  ],

  // ==================== DAY 514 — Advanced Graph Algorithms & Shortest Paths ====================
  514: [
    {"title": "Q1541. Dijkstra Algorithm", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/dijkstras-shortest-path-algorithm/", "description": "Medium | Graph, Shortest Path"},
    {"title": "Q1542. Bellman-Ford Algorithm", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/bellman-ford-algorithm/", "description": "Medium | Graph, Shortest Path"},
    {"title": "Q1543. Floyd-Warshall Algorithm", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/floyd-warshall-algorithm/", "description": "Hard | Graph, Shortest Path"}
  ],

  // ==================== DAY 515 — Advanced Graph Algorithms & Shortest Paths ====================
  515: [
    {"title": "Q1544. Cheapest Flights Within K Stops", "platform": "LeetCode", "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/", "description": "Medium | Graph, DP"},
    {"title": "Q1545. Network Delay Time", "platform": "LeetCode", "url": "https://leetcode.com/problems/network-delay-time/", "description": "Medium | Dijkstra"},
    {"title": "Q1546. Path With Minimum Effort", "platform": "LeetCode", "url": "https://leetcode.com/problems/path-with-minimum-effort/", "description": "Medium | Graph, Dijkstra"}
  ],

  // ==================== DAY 516 — Advanced Graph Algorithms & Shortest Paths ====================
  516: [
    {"title": "Q1547. Swim in Rising Water", "platform": "LeetCode", "url": "https://leetcode.com/problems/swim-in-rising-water/", "description": "Hard | Graph, Dijkstra"},
    {"title": "Q1548. Shortest Path in a Grid with Obstacles Elimination", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/", "description": "Hard | BFS"},
    {"title": "Q1549. Shortest Path Visiting All Nodes", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/", "description": "Hard | Bitmask BFS"}
  ],

  // ==================== DAY 517 — Advanced Graph Algorithms & Shortest Paths ====================
  517: [
    {"title": "Q1550. Word Ladder", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-ladder/", "description": "Hard | BFS"},
    {"title": "Q1551. Word Ladder II", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-ladder-ii/", "description": "Hard | BFS"},
    {"title": "Q1552. Open the Lock", "platform": "LeetCode", "url": "https://leetcode.com/problems/open-the-lock/", "description": "Medium | BFS"}
  ],

  // ==================== DAY 518 — Advanced Graph Algorithms & Shortest Paths ====================
  518: [
    {"title": "Q1553. Critical Connections in a Network", "platform": "LeetCode", "url": "https://leetcode.com/problems/critical-connections-in-a-network/", "description": "Hard | Tarjan Algorithm"},
    {"title": "Q1554. Articulation Points", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/articulation-points-or-cut-vertices-in-a-graph/", "description": "Hard | Tarjan Algorithm"},
    {"title": "Q1555. Bridges in a Graph", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/bridge-in-a-graph/", "description": "Hard | Tarjan Algorithm"}
  ],

  // ==================== DAY 519 — Advanced Graph Algorithms & Shortest Paths ====================
  519: [
    {"title": "Q1556. Strongly Connected Components", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/strongly-connected-components/", "description": "Hard | SCC"},
    {"title": "Q1557. Alien Dictionary", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/given-sorted-dictionary-find-precedence-characters/", "description": "Hard | Topological Sort"},
    {"title": "Q1558. Course Schedule II", "platform": "LeetCode", "url": "https://leetcode.com/problems/course-schedule-ii/", "description": "Medium | Topological Sort"}
  ],

  // ==================== DAY 520 — Advanced Graph Algorithms & Shortest Paths ====================
  520: [
    {"title": "Q1559. Minimum Height Trees", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-height-trees/", "description": "Medium | Graph"},
    {"title": "Q1560. Find Eventual Safe States", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-eventual-safe-states/", "description": "Medium | Graph"},
    {"title": "Q1561. Parallel Courses", "platform": "LeetCode", "url": "https://leetcode.com/problems/parallel-courses/", "description": "Medium | Graph, Topological Sort"}
  ],

  // ==================== DAY 521 — Advanced Graph Algorithms & Shortest Paths ====================
  521: [
    {"title": "Q1562. Accounts Merge", "platform": "LeetCode", "url": "https://leetcode.com/problems/accounts-merge/", "description": "Medium | DSU"},
    {"title": "Q1563. Number of Islands II", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-islands-ii/", "description": "Hard | DSU"},
    {"title": "Q1564. Regions Cut By Slashes", "platform": "LeetCode", "url": "https://leetcode.com/problems/regions-cut-by-slashes/", "description": "Medium | DSU"}
  ],

  // ==================== DAY 522 — Advanced Graph Algorithms & Shortest Paths ====================
  522: [
    {"title": "Q1565. Redundant Connection", "platform": "LeetCode", "url": "https://leetcode.com/problems/redundant-connection/", "description": "Medium | DSU"},
    {"title": "Q1566. Redundant Connection II", "platform": "LeetCode", "url": "https://leetcode.com/problems/redundant-connection-ii/", "description": "Hard | DSU"},
    {"title": "Q1567. Minimize Malware Spread", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimize-malware-spread/", "description": "Hard | DSU"}
  ],

  // ==================== DAY 523 — Advanced Graph Algorithms & Shortest Paths ====================
  523: [
    {"title": "Q1568. Minimum Spanning Tree", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/minimum-spanning-tree/", "description": "Medium | MST"},
    {"title": "Q1569. Kruskal’s Algorithm", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/kruskals-minimum-spanning-tree-algorithm/", "description": "Medium | MST"},
    {"title": "Q1570. Prim’s Algorithm", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/prims-minimum-spanning-tree-mst-greedy-algo-5/", "description": "Medium | MST"}
  ],
    // ==================== DAY 524 — Advanced Segment Trees & Range Queries ====================
  524: [
    {"title": "Q1571. Range Sum Query — Mutable", "platform": "LeetCode", "url": "https://leetcode.com/problems/range-sum-query-mutable/", "description": "Medium | Segment Tree"},
    {"title": "Q1572. Count of Smaller Numbers After Self", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", "description": "Hard | Segment Tree"},
    {"title": "Q1573. Reverse Pairs", "platform": "LeetCode", "url": "https://leetcode.com/problems/reverse-pairs/", "description": "Hard | Segment Tree"}
  ],

  // ==================== DAY 525 — Advanced Segment Trees & Range Queries ====================
  525: [
    {"title": "Q1574. Count of Range Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-of-range-sum/", "description": "Hard | Segment Tree"},
    {"title": "Q1575. Create Sorted Array through Instructions", "platform": "LeetCode", "url": "https://leetcode.com/problems/create-sorted-array-through-instructions/", "description": "Hard | Fenwick Tree"},
    {"title": "Q1576. Range Module", "platform": "LeetCode", "url": "https://leetcode.com/problems/range-module/", "description": "Hard | Segment Tree"}
  ],

  // ==================== DAY 526 — Advanced Segment Trees & Range Queries ====================
  526: [
    {"title": "Q1577. My Calendar I", "platform": "LeetCode", "url": "https://leetcode.com/problems/my-calendar-i/", "description": "Medium | Segment Tree"},
    {"title": "Q1578. My Calendar II", "platform": "LeetCode", "url": "https://leetcode.com/problems/my-calendar-ii/", "description": "Medium | Segment Tree"},
    {"title": "Q1579. My Calendar III", "platform": "LeetCode", "url": "https://leetcode.com/problems/my-calendar-iii/", "description": "Hard | Segment Tree"}
  ],

  // ==================== DAY 527 — Advanced Segment Trees & Range Queries ====================
  527: [
    {"title": "Q1580. Falling Squares", "platform": "LeetCode", "url": "https://leetcode.com/problems/falling-squares/", "description": "Hard | Segment Tree"},
    {"title": "Q1581. The Skyline Problem", "platform": "LeetCode", "url": "https://leetcode.com/problems/the-skyline-problem/", "description": "Hard | Sweep Line"},
    {"title": "Q1582. Rectangle Area II", "platform": "LeetCode", "url": "https://leetcode.com/problems/rectangle-area-ii/", "description": "Hard | Segment Tree"}
  ],

  // ==================== DAY 528 — Advanced Segment Trees & Range Queries ====================
  528: [
    {"title": "Q1583. Segment Tree Range Minimum Query", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/segment-tree-set-1-range-minimum-query/", "description": "Medium | Segment Tree"},
    {"title": "Q1584. Lazy Propagation", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/lazy-propagation-in-segment-tree/", "description": "Hard | Segment Tree"},
    {"title": "Q1585. Fenwick Tree", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/binary-indexed-tree-or-fenwick-tree/", "description": "Medium | Fenwick Tree"}
  ],

  // ==================== DAY 529 — Advanced Segment Trees & Range Queries ====================
  529: [
    {"title": "Q1586. Sliding Window Median", "platform": "LeetCode", "url": "https://leetcode.com/problems/sliding-window-median/", "description": "Hard | Sliding Window"},
    {"title": "Q1587. Find Median from Data Stream", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-median-from-data-stream/", "description": "Hard | Heap"},
    {"title": "Q1588. Kth Largest Element in a Stream", "platform": "LeetCode", "url": "https://leetcode.com/problems/kth-largest-element-in-a-stream/", "description": "Easy | Heap"}
  ],

  // ==================== DAY 530 — Advanced Segment Trees & Range Queries ====================
  530: [
    {"title": "Q1589. Design Skiplist", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-skiplist/", "description": "Hard | Data Structure Design"},
    {"title": "Q1590. All O’one Data Structure", "platform": "LeetCode", "url": "https://leetcode.com/problems/all-oone-data-structure/", "description": "Hard | Hash Map, Doubly Linked List"},
    {"title": "Q1591. LFU Cache", "platform": "LeetCode", "url": "https://leetcode.com/problems/lfu-cache/", "description": "Hard | Data Structure Design"}
  ],

  // ==================== DAY 531 — Advanced Segment Trees & Range Queries ====================
  531: [
    {"title": "Q1592. LRU Cache", "platform": "LeetCode", "url": "https://leetcode.com/problems/lru-cache/", "description": "Medium | Hash Map, Doubly Linked List"},
    {"title": "Q1593. Insert Delete GetRandom O(1)", "platform": "LeetCode", "url": "https://leetcode.com/problems/insert-delete-getrandom-o1/", "description": "Medium | Hash Map"},
    {"title": "Q1594. Insert Delete GetRandom O(1) Duplicates", "platform": "LeetCode", "url": "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/", "description": "Hard | Hash Map"}
  ],

  // ==================== DAY 532 — Advanced Segment Trees & Range Queries ====================
  532: [
    {"title": "Q1595. Design Search Autocomplete System", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-search-autocomplete-system/", "description": "Hard | Trie"},
    {"title": "Q1596. Design In-Memory File System", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-in-memory-file-system/", "description": "Hard | Trie"},
    {"title": "Q1597. Design Twitter", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-twitter/", "description": "Medium | Data Structure Design"}
  ],

  // ==================== DAY 533 — Advanced Segment Trees & Range Queries ====================
  533: [
    {"title": "Q1598. Maximum Sum Query", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-sum-queries/", "description": "Hard | Segment Tree"},
    {"title": "Q1599. Handling Sum Queries After Update", "platform": "LeetCode", "url": "https://leetcode.com/problems/handling-sum-queries-after-update/", "description": "Hard | Segment Tree"},
    {"title": "Q1600. Count of Range Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-of-range-sum/", "description": "Hard | Segment Tree"}
  ],  // ==================== DAY 534 — Advanced String Algorithms & Trie ====================
  534: [
    {"title": "Q1601. Implement Trie", "platform": "LeetCode", "url": "https://leetcode.com/problems/implement-trie-prefix-tree/", "description": "Medium | Trie"},
    {"title": "Q1602. Word Search II", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-search-ii/", "description": "Hard | Trie, Backtracking"},
    {"title": "Q1603. Design Add and Search Words", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/", "description": "Medium | Trie"}
  ],

  // ==================== DAY 535 — Advanced String Algorithms & Trie ====================
  535: [
    {"title": "Q1604. Replace Words", "platform": "LeetCode", "url": "https://leetcode.com/problems/replace-words/", "description": "Medium | Trie"},
    {"title": "Q1605. Longest Word in Dictionary", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-word-in-dictionary/", "description": "Medium | Trie"},
    {"title": "Q1606. Map Sum Pairs", "platform": "LeetCode", "url": "https://leetcode.com/problems/map-sum-pairs/", "description": "Medium | Trie"}
  ],

  // ==================== DAY 536 — Advanced String Algorithms & Trie ====================
  536: [
    {"title": "Q1607. Maximum XOR of Two Numbers", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", "description": "Medium | Trie, Bit Manipulation"},
    {"title": "Q1608. Maximum XOR With an Element From Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/", "description": "Hard | Trie"},
    {"title": "Q1609. Count Pairs With XOR in a Range", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-pairs-with-xor-in-a-range/", "description": "Hard | Trie"}
  ],

  // ==================== DAY 537 — Advanced String Algorithms & Trie ====================
  537: [
    {"title": "Q1610. Shortest Palindrome", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-palindrome/", "description": "Hard | KMP"},
    {"title": "Q1611. Repeated String Match", "platform": "LeetCode", "url": "https://leetcode.com/problems/repeated-string-match/", "description": "Medium | String Matching"},
    {"title": "Q1612. KMP Pattern Matching", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/kmp-algorithm-for-pattern-searching/", "description": "Medium | KMP"}
  ],

  // ==================== DAY 538 — Advanced String Algorithms & Trie ====================
  538: [
    {"title": "Q1613. Z Algorithm", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/z-algorithm-linear-time-pattern-searching-algorithm/", "description": "Medium | String Matching"},
    {"title": "Q1614. Rabin-Karp Algorithm", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/rabin-karp-algorithm-for-pattern-searching/", "description": "Medium | String Matching"},
    {"title": "Q1615. Longest Duplicate Substring", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-duplicate-substring/", "description": "Hard | Rolling Hash"}
  ],

  // ==================== DAY 539 — Advanced String Algorithms & Trie ====================
  539: [
    {"title": "Q1616. Repeated DNA Sequences", "platform": "LeetCode", "url": "https://leetcode.com/problems/repeated-dna-sequences/", "description": "Medium | Hashing"},
    {"title": "Q1617. String Compression II", "platform": "LeetCode", "url": "https://leetcode.com/problems/string-compression-ii/", "description": "Hard | DP"},
    {"title": "Q1618. Decode String", "platform": "LeetCode", "url": "https://leetcode.com/problems/decode-string/", "description": "Medium | Stack"}
  ],

  // ==================== DAY 540 — Advanced String Algorithms & Trie ====================
  540: [
    {"title": "Q1619. Basic Calculator", "platform": "LeetCode", "url": "https://leetcode.com/problems/basic-calculator/", "description": "Hard | Stack"},
    {"title": "Q1620. Basic Calculator II", "platform": "LeetCode", "url": "https://leetcode.com/problems/basic-calculator-ii/", "description": "Medium | Stack"},
    {"title": "Q1621. Basic Calculator III", "platform": "LeetCode", "url": "https://leetcode.com/problems/basic-calculator-iii/", "description": "Hard | Stack"}
  ],

  // ==================== DAY 541 — Advanced String Algorithms & Trie ====================
  541: [
    {"title": "Q1622. Text Justification", "platform": "LeetCode", "url": "https://leetcode.com/problems/text-justification/", "description": "Hard | Strings"},
    {"title": "Q1623. Valid Number", "platform": "LeetCode", "url": "https://leetcode.com/problems/valid-number/", "description": "Hard | Strings"},
    {"title": "Q1624. Simplify Path", "platform": "LeetCode", "url": "https://leetcode.com/problems/simplify-path/", "description": "Medium | Stack"}
  ],

  // ==================== DAY 542 — Advanced String Algorithms & Trie ====================
  542: [
    {"title": "Q1625. Minimum Remove to Make Valid Parentheses", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/", "description": "Medium | Stack"},
    {"title": "Q1626. Remove Invalid Parentheses", "platform": "LeetCode", "url": "https://leetcode.com/problems/remove-invalid-parentheses/", "description": "Hard | BFS, Backtracking"},
    {"title": "Q1627. Longest Valid Parentheses", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-valid-parentheses/", "description": "Hard | DP, Stack"}
  ],

  // ==================== DAY 543 — Advanced String Algorithms & Trie ====================
  543: [
    {"title": "Q1628. Find All Anagrams in a String", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string/", "description": "Medium | Sliding Window"},
    {"title": "Q1629. Minimum Window Substring", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-window-substring/", "description": "Hard | Sliding Window"},
    {"title": "Q1630. Sliding Window Maximum", "platform": "LeetCode", "url": "https://leetcode.com/problems/sliding-window-maximum/", "description": "Hard | Monotonic Queue"}
  ],
    // ==================== DAY 544 — Advanced Greedy, Scheduling & Optimization ====================
  544: [
    {"title": "Q1631. Jump Game II", "platform": "LeetCode", "url": "https://leetcode.com/problems/jump-game-ii/", "description": "Medium | Greedy"},
    {"title": "Q1632. Minimum Number of Refueling Stops", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-refueling-stops/", "description": "Hard | Greedy, Heap"},
    {"title": "Q1633. Gas Station", "platform": "LeetCode", "url": "https://leetcode.com/problems/gas-station/", "description": "Medium | Greedy"}
  ],

  // ==================== DAY 545 — Advanced Greedy, Scheduling & Optimization ====================
  545: [
    {"title": "Q1634. Candy", "platform": "LeetCode", "url": "https://leetcode.com/problems/candy/", "description": "Hard | Greedy"},
    {"title": "Q1635. Queue Reconstruction by Height", "platform": "LeetCode", "url": "https://leetcode.com/problems/queue-reconstruction-by-height/", "description": "Medium | Greedy"},
    {"title": "Q1636. Minimum Cost to Hire K Workers", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/", "description": "Hard | Greedy, Heap"}
  ],

  // ==================== DAY 546 — Advanced Greedy, Scheduling & Optimization ====================
  546: [
    {"title": "Q1637. IPO", "platform": "LeetCode", "url": "https://leetcode.com/problems/ipo/", "description": "Hard | Greedy, Heap"},
    {"title": "Q1638. Maximum Performance of a Team", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-performance-of-a-team/", "description": "Hard | Greedy, Heap"},
    {"title": "Q1639. Task Scheduler", "platform": "LeetCode", "url": "https://leetcode.com/problems/task-scheduler/", "description": "Medium | Greedy, Heap"}
  ],

  // ==================== DAY 547 — Advanced Greedy, Scheduling & Optimization ====================
  547: [
    {"title": "Q1640. Rearrange String K Distance Apart", "platform": "LeetCode", "url": "https://leetcode.com/problems/rearrange-string-k-distance-apart/", "description": "Hard | Greedy, Heap"},
    {"title": "Q1641. Rearrange Barcodes", "platform": "LeetCode", "url": "https://leetcode.com/problems/distant-barcodes/", "description": "Medium | Greedy, Heap"},
    {"title": "Q1642. Minimum Cost to Connect Sticks", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-connect-sticks/", "description": "Medium | Greedy, Heap"}
  ],

  // ==================== DAY 548 — Advanced Greedy, Scheduling & Optimization ====================
  548: [
    {"title": "Q1643. Huffman Encoding", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/huffman-coding-greedy-algo-3/", "description": "Medium | Greedy"},
    {"title": "Q1644. Partition Labels", "platform": "LeetCode", "url": "https://leetcode.com/problems/partition-labels/", "description": "Medium | Greedy"},
    {"title": "Q1645. Wiggle Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/wiggle-subsequence/", "description": "Medium | Greedy, DP"}
  ],

  // ==================== DAY 549 — Advanced Greedy, Scheduling & Optimization ====================
  549: [
    {"title": "Q1646. Maximum Length of Pair Chain", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-length-of-pair-chain/", "description": "Medium | Greedy"},
    {"title": "Q1647. Minimum Deletions to Make Character Frequencies Unique", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/", "description": "Medium | Greedy"},
    {"title": "Q1648. Maximum Gap", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-gap/", "description": "Medium | Bucket Sort"}
  ],

  // ==================== DAY 550 — Advanced Greedy, Scheduling & Optimization ====================
  550: [
    {"title": "Q1649. Maximum Number of Events That Can Be Attended", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/", "description": "Medium | Greedy, Heap"},
    {"title": "Q1650. Maximum Number of Events That Can Be Attended II", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/", "description": "Hard | DP, Binary Search"},
    {"title": "Q1651. Meeting Rooms III", "platform": "LeetCode", "url": "https://leetcode.com/problems/meeting-rooms-iii/", "description": "Hard | Heap"}
  ],

  // ==================== DAY 551 — Advanced Greedy, Scheduling & Optimization ====================
  551: [
    {"title": "Q1652. Minimum Platforms", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/minimum-number-platforms-required-railwaybus-station/", "description": "Medium | Greedy"},
    {"title": "Q1653. Job Sequencing Problem", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/job-sequencing-problem/", "description": "Medium | Greedy"},
    {"title": "Q1654. Fractional Knapsack", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/fractional-knapsack-problem/", "description": "Medium | Greedy"}
  ],

  // ==================== DAY 552 — Advanced Greedy, Scheduling & Optimization ====================
  552: [
    {"title": "Q1655. Minimum Number of Taps to Open to Water a Garden", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/", "description": "Hard | Greedy"},
    {"title": "Q1656. Video Stitching", "platform": "LeetCode", "url": "https://leetcode.com/problems/video-stitching/", "description": "Medium | Greedy"},
    {"title": "Q1657. Minimum Refueling Stops", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-refueling-stops/", "description": "Hard | Greedy, Heap"}
  ],

  // ==================== DAY 553 — Advanced Greedy, Scheduling & Optimization ====================
  553: [
    {"title": "Q1658. Non-overlapping Intervals", "platform": "LeetCode", "url": "https://leetcode.com/problems/non-overlapping-intervals/", "description": "Medium | Greedy"},
    {"title": "Q1659. Minimum Arrows to Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", "description": "Medium | Greedy"},
    {"title": "Q1660. Employee Free Time", "platform": "LeetCode", "url": "https://leetcode.com/problems/employee-free-time/", "description": "Hard | Greedy, Intervals"}
  ],
    // ==================== DAY 554 — Advanced Bitmask DP & Game Theory ====================
  554: [
    {"title": "Q1661. Single Number III", "platform": "LeetCode", "url": "https://leetcode.com/problems/single-number-iii/", "description": "Medium | Bit Manipulation"},
    {"title": "Q1662. Bitwise AND of Numbers Range", "platform": "LeetCode", "url": "https://leetcode.com/problems/bitwise-and-of-numbers-range/", "description": "Medium | Bit Manipulation"},
    {"title": "Q1663. Counting Bits", "platform": "LeetCode", "url": "https://leetcode.com/problems/counting-bits/", "description": "Easy | Bit Manipulation"}
  ],

  // ==================== DAY 555 — Advanced Bitmask DP & Game Theory ====================
  555: [
    {"title": "Q1664. Sum of Two Integers", "platform": "LeetCode", "url": "https://leetcode.com/problems/sum-of-two-integers/", "description": "Medium | Bit Manipulation"},
    {"title": "Q1665. Minimum Flips to Make a OR b Equal to c", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/", "description": "Medium | Bit Manipulation"},
    {"title": "Q1666. Maximum Length of a Concatenated String with Unique Characters", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/", "description": "Medium | Bitmask DP"}
  ],

  // ==================== DAY 556 — Advanced Bitmask DP & Game Theory ====================
  556: [
    {"title": "Q1667. Smallest Sufficient Team", "platform": "LeetCode", "url": "https://leetcode.com/problems/smallest-sufficient-team/", "description": "Hard | Bitmask DP"},
    {"title": "Q1668. Parallel Courses II", "platform": "LeetCode", "url": "https://leetcode.com/problems/parallel-courses-ii/", "description": "Hard | Bitmask DP"},
    {"title": "Q1669. Maximum Students Taking Exam", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-students-taking-exam/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 557 — Advanced Bitmask DP & Game Theory ====================
  557: [
    {"title": "Q1670. Can I Win", "platform": "LeetCode", "url": "https://leetcode.com/problems/can-i-win/", "description": "Medium | Game Theory, Bitmask DP"},
    {"title": "Q1671. Flip Game II", "platform": "LeetCode", "url": "https://leetcode.com/problems/flip-game-ii/", "description": "Medium | Game Theory"},
    {"title": "Q1672. Beautiful Arrangement", "platform": "LeetCode", "url": "https://leetcode.com/problems/beautiful-arrangement/", "description": "Medium | Backtracking, Bitmask DP"}
  ],

  // ==================== DAY 558 — Advanced Bitmask DP & Game Theory ====================
  558: [
    {"title": "Q1673. Matchsticks to Square", "platform": "LeetCode", "url": "https://leetcode.com/problems/matchsticks-to-square/", "description": "Medium | Backtracking"},
    {"title": "Q1674. Partition to K Equal Sum Subsets", "platform": "LeetCode", "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/", "description": "Medium | Backtracking, Bitmask DP"},
    {"title": "Q1675. Traveling Salesman Problem", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/travelling-salesman-problem-using-dynamic-programming/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 559 — Advanced Bitmask DP & Game Theory ====================
  559: [
    {"title": "Q1676. Hamiltonian Cycle", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/hamiltonian-cycle/", "description": "Hard | Backtracking"},
    {"title": "Q1677. Hamiltonian Path", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/hamiltonian-path/", "description": "Hard | Backtracking"},
    {"title": "Q1678. Minimum XOR Sum of Two Arrays", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 560 — Advanced Bitmask DP & Game Theory ====================
  560: [
    {"title": "Q1679. Number of Ways to Wear Different Hats", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/", "description": "Hard | Bitmask DP"},
    {"title": "Q1680. Maximum Compatibility Score Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-compatibility-score-sum/", "description": "Medium | Bitmask DP"},
    {"title": "Q1681. Maximum AND Sum of Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-and-sum-of-array/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 561 — Advanced Bitmask DP & Game Theory ====================
  561: [
    {"title": "Q1682. Minimum Number of Work Sessions", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/", "description": "Medium | Bitmask DP"},
    {"title": "Q1683. Maximum Score from Performing Multiplication Operations", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/", "description": "Medium | DP"},
    {"title": "Q1684. Assignment Problem Using Bitmask", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/assignment-problem-using-bitmask/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 562 — Advanced Bitmask DP & Game Theory ====================
  562: [
    {"title": "Q1685. Minimum Cost Matching", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/assignment-problem-using-bitmask/", "description": "Hard | Bitmask DP"},
    {"title": "Q1686. Subset Partition DP", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/partition-problem-dp-18/", "description": "Hard | Subset DP"},
    {"title": "Q1687. Number of Ways to Assign Hats", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 563 — Advanced Bitmask DP & Game Theory ====================
  563: [
    {"title": "Q1688. Stone Game", "platform": "LeetCode", "url": "https://leetcode.com/problems/stone-game/", "description": "Medium | Game Theory"},
    {"title": "Q1689. Stone Game II", "platform": "LeetCode", "url": "https://leetcode.com/problems/stone-game-ii/", "description": "Medium | Game Theory, DP"},
    {"title": "Q1690. Stone Game III", "platform": "LeetCode", "url": "https://leetcode.com/problems/stone-game-iii/", "description": "Hard | Game Theory, DP"}
  ],  // ==================== DAY 564 — Computational Geometry & Sweep Line ====================
  564: [
    {"title": "Q1691. Max Points on a Line", "platform": "LeetCode", "url": "https://leetcode.com/problems/max-points-on-a-line/", "description": "Hard | Geometry"},
    {"title": "Q1692. Check if It Is a Straight Line", "platform": "LeetCode", "url": "https://leetcode.com/problems/check-if-it-is-a-straight-line/", "description": "Easy | Geometry"},
    {"title": "Q1693. Valid Square", "platform": "LeetCode", "url": "https://leetcode.com/problems/valid-square/", "description": "Medium | Geometry"}
  ],

  // ==================== DAY 565 — Computational Geometry & Sweep Line ====================
  565: [
    {"title": "Q1694. Rectangle Overlap", "platform": "LeetCode", "url": "https://leetcode.com/problems/rectangle-overlap/", "description": "Easy | Geometry"},
    {"title": "Q1695. Rectangle Area", "platform": "LeetCode", "url": "https://leetcode.com/problems/rectangle-area/", "description": "Medium | Geometry"},
    {"title": "Q1696. Perfect Rectangle", "platform": "LeetCode", "url": "https://leetcode.com/problems/perfect-rectangle/", "description": "Hard | Geometry"}
  ],

  // ==================== DAY 566 — Computational Geometry & Sweep Line ====================
  566: [
    {"title": "Q1697. The Skyline Problem", "platform": "LeetCode", "url": "https://leetcode.com/problems/the-skyline-problem/", "description": "Hard | Sweep Line"},
    {"title": "Q1698. Rectangle Area II", "platform": "LeetCode", "url": "https://leetcode.com/problems/rectangle-area-ii/", "description": "Hard | Sweep Line, Segment Tree"},
    {"title": "Q1699. Falling Squares", "platform": "LeetCode", "url": "https://leetcode.com/problems/falling-squares/", "description": "Hard | Segment Tree"}
  ],

  // ==================== DAY 567 — Computational Geometry & Sweep Line ====================
  567: [
    {"title": "Q1700. Minimum Area Rectangle", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-area-rectangle/", "description": "Medium | Geometry"},
    {"title": "Q1701. Minimum Area Rectangle II", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-area-rectangle-ii/", "description": "Medium | Geometry"},
    {"title": "Q1702. Erect the Fence", "platform": "LeetCode", "url": "https://leetcode.com/problems/erect-the-fence/", "description": "Hard | Convex Hull"}
  ],

  // ==================== DAY 568 — Computational Geometry & Sweep Line ====================
  568: [
    {"title": "Q1703. Convex Hull", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/convex-hull/", "description": "Hard | Geometry"},
    {"title": "Q1704. Closest Pair of Points", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/closest-pair-of-points-using-divide-and-conquer-algorithm/", "description": "Hard | Geometry"},
    {"title": "Q1705. Line Sweep: Meeting Rooms", "platform": "LeetCode", "url": "https://leetcode.com/problems/meeting-rooms-ii/", "description": "Medium | Sweep Line"}
  ],

  // ==================== DAY 569 — Computational Geometry & Sweep Line ====================
  569: [
    {"title": "Q1706. Count of Range Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-of-range-sum/", "description": "Hard | Segment Tree"},
    {"title": "Q1707. Merge Intervals", "platform": "LeetCode", "url": "https://leetcode.com/problems/merge-intervals/", "description": "Medium | Intervals"},
    {"title": "Q1708. Insert Interval", "platform": "LeetCode", "url": "https://leetcode.com/problems/insert-interval/", "description": "Medium | Intervals"}
  ],

  // ==================== DAY 570 — Computational Geometry & Sweep Line ====================
  570: [
    {"title": "Q1709. My Calendar III", "platform": "LeetCode", "url": "https://leetcode.com/problems/my-calendar-iii/", "description": "Hard | Sweep Line"},
    {"title": "Q1710. Employee Free Time", "platform": "LeetCode", "url": "https://leetcode.com/problems/employee-free-time/", "description": "Hard | Intervals"},
    {"title": "Q1711. Minimum Number of Arrows to Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", "description": "Medium | Greedy, Intervals"}
  ],

  // ==================== DAY 571 — Computational Geometry & Sweep Line ====================
  571: [
    {"title": "Q1712. Count of Smaller Numbers After Self", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", "description": "Hard | Segment Tree"},
    {"title": "Q1713. Reverse Pairs", "platform": "LeetCode", "url": "https://leetcode.com/problems/reverse-pairs/", "description": "Hard | Segment Tree"},
    {"title": "Q1714. Create Sorted Array through Instructions", "platform": "LeetCode", "url": "https://leetcode.com/problems/create-sorted-array-through-instructions/", "description": "Hard | Fenwick Tree"}
  ],

  // ==================== DAY 572 — Computational Geometry & Sweep Line ====================
  572: [
    {"title": "Q1715. Range Module", "platform": "LeetCode", "url": "https://leetcode.com/problems/range-module/", "description": "Hard | Segment Tree"},
    {"title": "Q1716. Rectangle Overlap Counting", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/rectangle-overlap/", "description": "Medium | Geometry"},
    {"title": "Q1717. Sweep Line Maximum Overlap", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/maximum-number-of-overlapping-intervals/", "description": "Medium | Sweep Line"}
  ],

  // ==================== DAY 573 — Computational Geometry & Sweep Line ====================
  573: [
    {"title": "Q1718. K Closest Points to Origin", "platform": "LeetCode", "url": "https://leetcode.com/problems/k-closest-points-to-origin/", "description": "Medium | Heap"},
    {"title": "Q1719. Find K Pairs with Smallest Sums", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", "description": "Medium | Heap"},
    {"title": "Q1720. Maximum Number of Events That Can Be Attended", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/", "description": "Medium | Greedy, Heap"}
  ],  // ==================== DAY 574 — Codeforces Advanced Contest Practice ====================
  574: [
    {"title": "Q1721. CF 1600+ Implementation", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=implementation", "description": "Medium | Implementation"},
    {"title": "Q1722. CF 1700+ Greedy", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=greedy", "description": "Hard | Greedy"},
    {"title": "Q1723. CF 1800+ Binary Search", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=binary+search", "description": "Hard | Binary Search"}
  ],

  // ==================== DAY 575 — Codeforces Advanced Contest Practice ====================
  575: [
    {"title": "Q1724. CF 1800+ DP", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=dp", "description": "Hard | DP"},
    {"title": "Q1725. CF 1900+ Graph", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=graphs", "description": "Hard | Graph"},
    {"title": "Q1726. CF 2000+ Tree", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=trees", "description": "Hard | Tree"}
  ],

  // ==================== DAY 576 — Codeforces Advanced Contest Practice ====================
  576: [
    {"title": "Q1727. CF Advanced Number Theory", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=number+theory", "description": "Hard | Number Theory"},
    {"title": "Q1728. CF Advanced Combinatorics", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=combinatorics", "description": "Hard | Combinatorics"},
    {"title": "Q1729. CF Constructive Algorithms", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=constructive+algorithms", "description": "Hard | Constructive"}
  ],

  // ==================== DAY 577 — Codeforces Advanced Contest Practice ====================
  577: [
    {"title": "Q1730. CF Advanced Strings", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=strings", "description": "Hard | Strings"},
    {"title": "Q1731. CF Bitmask DP", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=bitmasks", "description": "Hard | Bitmask DP"},
    {"title": "Q1732. CF Segment Tree", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags= segment+tree", "description": "Hard | Segment Tree"}
  ],

  // ==================== DAY 578 — Codeforces Advanced Contest Practice ====================
  578: [
    {"title": "Q1733. CF Fenwick Tree", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=fenwick", "description": "Hard | Fenwick Tree"},
    {"title": "Q1734. CF Sparse Table", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=sparse+table", "description": "Hard | Sparse Table"},
    {"title": "Q1735. CF DSU Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=dsu", "description": "Hard | DSU"}
  ],

  // ==================== DAY 579 — Codeforces Advanced Contest Practice ====================
  579: [
    {"title": "Q1736. CF Shortest Paths", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=shortest+paths", "description": "Hard | Graph"},
    {"title": "Q1737. CF Minimum Spanning Tree", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags= minimum+spanning+tree", "description": "Hard | MST"},
    {"title": "Q1738. CF SCC Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=strongly+connected+components", "description": "Hard | SCC"}
  ],

  // ==================== DAY 580 — Codeforces Advanced Contest Practice ====================
  580: [
    {"title": "Q1739. CF Game Theory", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=games", "description": "Hard | Game Theory"},
    {"title": "Q1740. CF Probability", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=probabilities", "description": "Hard | Probability"},
    {"title": "Q1741. CF Geometry", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=geometry", "description": "Hard | Geometry"}
  ],

  // ==================== DAY 581 — Codeforces Advanced Contest Practice ====================
  581: [
    {"title": "Q1742. CF Interactive Problem", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=interactive", "description": "Hard | Interactive"},
    {"title": "Q1743. CF 2000+ Math", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=math", "description": "Hard | Math"},
    {"title": "Q1744. CF 2100+ DP", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=dp", "description": "Hard | DP"}
  ],

  // ==================== DAY 582 — Codeforces Advanced Contest Practice ====================
  582: [
    {"title": "Q1745. CF 2100+ Graph", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=graphs", "description": "Hard | Graph"},
    {"title": "Q1746. CF 2200+ Greedy", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=greedy", "description": "Hard | Greedy"},
    {"title": "Q1747. CF 2200+ Data Structures", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=data+structures", "description": "Hard | Data Structures"}
  ],

  // ==================== DAY 583 — Codeforces Advanced Contest Practice ====================
  583: [
    {"title": "Q1748. CF 2200+ Number Theory", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=number+theory", "description": "Hard | Number Theory"},
    {"title": "Q1749. CF 2300+ DP", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=dp", "description": "Hard | DP"},
    {"title": "Q1750. CF 2300+ Graph", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=graphs", "description": "Hard | Graph"}
  ],  // ==================== DAY 584 — Final Expert-Level DSA Mixed Practice ====================
  584: [
    {"title": "Q1751. Median of Two Sorted Arrays", "platform": "LeetCode", "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/", "description": "Hard | Binary Search"},
    {"title": "Q1752. Trapping Rain Water II", "platform": "LeetCode", "url": "https://leetcode.com/problems/trapping-rain-water-ii/", "description": "Hard | Heap, BFS"},
    {"title": "Q1753. Largest Rectangle in Histogram", "platform": "LeetCode", "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/", "description": "Hard | Monotonic Stack"}
  ],

  // ==================== DAY 585 — Final Expert-Level DSA Mixed Practice ====================
  585: [
    {"title": "Q1754. Maximum Profit in Job Scheduling", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", "description": "Hard | DP"},
    {"title": "Q1755. Maximum Profit with K Transactions", "platform": "LeetCode", "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", "description": "Hard | DP"},
    {"title": "Q1756. Minimum Cost to Make Array Equal", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-make-array-equal/", "description": "Hard | Greedy, Binary Search"}
  ],

  // ==================== DAY 586 — Final Expert-Level DSA Mixed Practice ====================
  586: [
    {"title": "Q1757. Longest Increasing Path in a Matrix", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/", "description": "Hard | DP, DFS"},
    {"title": "Q1758. Cherry Pickup", "platform": "LeetCode", "url": "https://leetcode.com/problems/cherry-pickup/", "description": "Hard | DP"},
    {"title": "Q1759. Dungeon Game", "platform": "LeetCode", "url": "https://leetcode.com/problems/dungeon-game/", "description": "Hard | DP"}
  ],

  // ==================== DAY 587 — Final Expert-Level DSA Mixed Practice ====================
  587: [
    {"title": "Q1760. Sudoku Solver", "platform": "LeetCode", "url": "https://leetcode.com/problems/sudoku-solver/", "description": "Hard | Backtracking"},
    {"title": "Q1761. N-Queens", "platform": "LeetCode", "url": "https://leetcode.com/problems/n-queens/", "description": "Hard | Backtracking"},
    {"title": "Q1762. Expression Add Operators", "platform": "LeetCode", "url": "https://leetcode.com/problems/expression-add-operators/", "description": "Hard | Backtracking"}
  ],

  // ==================== DAY 588 — Final Expert-Level DSA Mixed Practice ====================
  588: [
    {"title": "Q1763. Word Search II", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-search-ii/", "description": "Hard | Trie, Backtracking"},
    {"title": "Q1764. Remove Boxes", "platform": "LeetCode", "url": "https://leetcode.com/problems/remove-boxes/", "description": "Hard | DP"},
    {"title": "Q1765. Freedom Trail", "platform": "LeetCode", "url": "https://leetcode.com/problems/freedom-trail/", "description": "Hard | DP"}
  ],

  // ==================== DAY 589 — Final Expert-Level DSA Mixed Practice ====================
  589: [
    {"title": "Q1766. Shortest Path Visiting All Nodes", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/", "description": "Hard | Bitmask BFS"},
    {"title": "Q1767. Reconstruct Itinerary", "platform": "LeetCode", "url": "https://leetcode.com/problems/reconstruct-itinerary/", "description": "Hard | Graph, DFS"},
    {"title": "Q1768. Minimum Cost to Connect All Points", "platform": "LeetCode", "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/", "description": "Medium | MST"}
  ],

  // ==================== DAY 590 — Final Expert-Level DSA Mixed Practice ====================
  590: [
    {"title": "Q1769. Critical Connections in a Network", "platform": "LeetCode", "url": "https://leetcode.com/problems/critical-connections-in-a-network/", "description": "Hard | Tarjan Algorithm"},
    {"title": "Q1770. Maximum Flow", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/maximum-flow-problem/", "description": "Hard | Graph"},
    {"title": "Q1771. Min Cost Max Flow", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/min-cost-max-flow-problem/", "description": "Hard | Graph"}
  ],

  // ==================== DAY 591 — Final Expert-Level DSA Mixed Practice ====================
  591: [
    {"title": "Q1772. Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/burst-balloons/", "description": "Hard | Interval DP"},
    {"title": "Q1773. Minimum Cost to Merge Stones", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-merge-stones/", "description": "Hard | Interval DP"},
    {"title": "Q1774. Strange Printer", "platform": "LeetCode", "url": "https://leetcode.com/problems/strange-printer/", "description": "Hard | Interval DP"}
  ],

  // ==================== DAY 592 — Final Expert-Level DSA Mixed Practice ====================
  592: [
    {"title": "Q1775. Count of Range Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-of-range-sum/", "description": "Hard | Segment Tree"},
    {"title": "Q1776. Reverse Pairs", "platform": "LeetCode", "url": "https://leetcode.com/problems/reverse-pairs/", "description": "Hard | Segment Tree"},
    {"title": "Q1777. Sliding Window Median", "platform": "LeetCode", "url": "https://leetcode.com/problems/sliding-window-median/", "description": "Hard | Sliding Window"}
  ],

  // ==================== DAY 593 — Final Expert-Level DSA Mixed Practice ====================
  593: [
    {"title": "Q1778. LFU Cache", "platform": "LeetCode", "url": "https://leetcode.com/problems/lfu-cache/", "description": "Hard | Data Structure Design"},
    {"title": "Q1779. Design In-Memory File System", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-in-memory-file-system/", "description": "Hard | Trie"},
    {"title": "Q1780. Design Search Autocomplete System", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-search-autocomplete-system/", "description": "Hard | Trie"}
  ],

  // ==================== DAY 594 — DSA Interview, Contest & Revision Challenge ====================
  594: [
    {"title": "Q1781. Product of Array Except Self", "platform": "LeetCode", "url": "https://leetcode.com/problems/product-of-array-except-self/", "description": "Medium | Arrays"},
    {"title": "Q1782. Subarray Sum Equals K", "platform": "LeetCode", "url": "https://leetcode.com/problems/subarray-sum-equals-k/", "description": "Medium | Prefix Sum, Hash Map"},
    {"title": "Q1783. Longest Consecutive Sequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-consecutive-sequence/", "description": "Medium | Hash Set"}
  ],

  // ==================== DAY 595 — DSA Interview, Contest & Revision Challenge ====================
  595: [
    {"title": "Q1784. Trapping Rain Water", "platform": "LeetCode", "url": "https://leetcode.com/problems/trapping-rain-water/", "description": "Hard | Two Pointers"},
    {"title": "Q1785. Sliding Window Maximum", "platform": "LeetCode", "url": "https://leetcode.com/problems/sliding-window-maximum/", "description": "Hard | Monotonic Queue"},
    {"title": "Q1786. Minimum Window Substring", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-window-substring/", "description": "Hard | Sliding Window"}
  ],

  // ==================== DAY 596 — DSA Interview, Contest & Revision Challenge ====================
  596: [
    {"title": "Q1787. Edit Distance", "platform": "LeetCode", "url": "https://leetcode.com/problems/edit-distance/", "description": "Hard | DP"},
    {"title": "Q1788. Wildcard Matching", "platform": "LeetCode", "url": "https://leetcode.com/problems/wildcard-matching/", "description": "Hard | DP"},
    {"title": "Q1789. Regular Expression Matching", "platform": "LeetCode", "url": "https://leetcode.com/problems/regular-expression-matching/", "description": "Hard | DP"}
  ],

  // ==================== DAY 597 — DSA Interview, Contest & Revision Challenge ====================
  597: [
    {"title": "Q1790. Median of Two Sorted Arrays", "platform": "LeetCode", "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/", "description": "Hard | Binary Search"},
    {"title": "Q1791. Kth Largest Element in an Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/", "description": "Medium | Heap"},
    {"title": "Q1792. Top K Frequent Elements", "platform": "LeetCode", "url": "https://leetcode.com/problems/top-k-frequent-elements/", "description": "Medium | Heap, Hash Map"}
  ],

  // ==================== DAY 598 — DSA Interview, Contest & Revision Challenge ====================
  598: [
    {"title": "Q1793. Merge Intervals", "platform": "LeetCode", "url": "https://leetcode.com/problems/merge-intervals/", "description": "Medium | Intervals"},
    {"title": "Q1794. Insert Interval", "platform": "LeetCode", "url": "https://leetcode.com/problems/insert-interval/", "description": "Medium | Intervals"},
    {"title": "Q1795. Non-overlapping Intervals", "platform": "LeetCode", "url": "https://leetcode.com/problems/non-overlapping-intervals/", "description": "Medium | Greedy"}
  ],

  // ==================== DAY 599 — DSA Interview, Contest & Revision Challenge ====================
  599: [
    {"title": "Q1796. Binary Tree Maximum Path Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/", "description": "Hard | Tree, DFS"},
    {"title": "Q1797. Serialize and Deserialize Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", "description": "Hard | Tree"},
    {"title": "Q1798. Lowest Common Ancestor of a Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", "description": "Medium | Tree"}
  ],

  // ==================== DAY 600 — DSA Interview, Contest & Revision Challenge ====================
  600: [
    {"title": "Q1799. Word Ladder", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-ladder/", "description": "Hard | BFS"},
    {"title": "Q1800. Course Schedule II", "platform": "LeetCode", "url": "https://leetcode.com/problems/course-schedule-ii/", "description": "Medium | Topological Sort"},
    {"title": "Q1801. Accounts Merge", "platform": "LeetCode", "url": "https://leetcode.com/problems/accounts-merge/", "description": "Medium | DSU"}
  ],

  // ==================== DAY 601 — DSA Interview, Contest & Revision Challenge ====================
  601: [
    {"title": "Q1802. Maximum XOR of Two Numbers", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", "description": "Medium | Trie, Bit Manipulation"},
    {"title": "Q1803. Smallest Sufficient Team", "platform": "LeetCode", "url": "https://leetcode.com/problems/smallest-sufficient-team/", "description": "Hard | Bitmask DP"},
    {"title": "Q1804. Traveling Salesman Problem", "platform": "GFG", "url": "https://www.geeksforgeeks.org/dsa/travelling-salesman-problem-using-dynamic-programming/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 602 — DSA Interview, Contest & Revision Challenge ====================
  602: [
    {"title": "Q1805. Codeforces 2000+ DP Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=dp", "description": "Hard | DP"},
    {"title": "Q1806. Codeforces 2000+ Graph Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=graphs", "description": "Hard | Graph"},
    {"title": "Q1807. Codeforces 2100+ Greedy Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=greedy", "description": "Hard | Greedy"}
  ],

  // ==================== DAY 603 — DSA Interview, Contest & Revision Challenge ====================
  603: [
    {"title": "Q1808. Codeforces 2200+ Advanced Problem", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Advanced Algorithms"},
    {"title": "Q1809. LeetCode Hard Contest Problem", "platform": "LeetCode", "url": "https://leetcode.com/problemset/?difficulty=HARD", "description": "Hard | Contest Practice"},
    {"title": "Q1810. Final Expert DSA Challenge", "platform": "LeetCode", "url": "https://leetcode.com/problemset/?difficulty=HARD", "description": "Hard | Mixed DSA"}
  ],
    // ==================== DAY 604 — Advanced DP & State Optimization ====================
  604: [
    {"title": "Q1811. Maximum Profit in Job Scheduling", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", "description": "Hard | Advanced DP"},
    {"title": "Q1812. Minimum Difficulty of a Job Schedule", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/", "description": "Hard | Advanced DP"},
    {"title": "Q1813. Allocate Mailboxes", "platform": "LeetCode", "url": "https://leetcode.com/problems/allocate-mailboxes/", "description": "Hard | Advanced DP"}
  ],

  // ==================== DAY 605 — Advanced DP & State Optimization ====================
  605: [
    {"title": "Q1814. Frog Jump", "platform": "LeetCode", "url": "https://leetcode.com/problems/frog-jump/", "description": "Hard | Dynamic Programming"},
    {"title": "Q1815. Number of Ways to Form a Target String", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/", "description": "Hard | DP"},
    {"title": "Q1816. Minimum Cost to Merge Stones", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-merge-stones/", "description": "Hard | Interval DP"}
  ],

  // ==================== DAY 606 — Advanced DP & State Optimization ====================
  606: [
    {"title": "Q1817. Minimum Falling Path Sum II", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-falling-path-sum-ii/", "description": "Hard | DP"},
    {"title": "Q1818. Maximum Dot Product of Two Subsequences", "platform": "LeetCode", "url": "https://leetcode.com/problems/max-dot-product-of-two-subsequences/", "description": "Hard | DP"},
    {"title": "Q1819. Minimum ASCII Delete Sum for Two Strings", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/", "description": "Medium | String DP"}
  ],

  // ==================== DAY 607 — Advanced DP & State Optimization ====================
  607: [
    {"title": "Q1820. Maximize Score After N Operations", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximize-score-after-n-operations/", "description": "Hard | Bitmask DP"},
    {"title": "Q1821. Number of Ways to Paint N × 3 Grid", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/", "description": "Hard | State DP"},
    {"title": "Q1822. Minimum Cost to Cut a Stick", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", "description": "Hard | Interval DP"}
  ],

  // ==================== DAY 608 — Advanced DP & State Optimization ====================
  608: [
    {"title": "Q1823. Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/burst-balloons/", "description": "Hard | Interval DP"},
    {"title": "Q1824. Strange Printer", "platform": "LeetCode", "url": "https://leetcode.com/problems/strange-printer/", "description": "Hard | Interval DP"},
    {"title": "Q1825. Palindrome Partitioning II", "platform": "LeetCode", "url": "https://leetcode.com/problems/palindrome-partitioning-ii/", "description": "Hard | String DP"}
  ],

  // ==================== DAY 609 — Advanced DP & State Optimization ====================
  609: [
    {"title": "Q1826. Palindrome Partitioning III", "platform": "LeetCode", "url": "https://leetcode.com/problems/palindrome-partitioning-iii/", "description": "Hard | String DP"},
    {"title": "Q1827. Palindrome Partitioning IV", "platform": "LeetCode", "url": "https://leetcode.com/problems/palindrome-partitioning-iv/", "description": "Hard | String DP"},
    {"title": "Q1828. Maximum Length of Repeated Subarray", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-length-of-repeated-subarray/", "description": "Medium | DP"}
  ],

  // ==================== DAY 610 — Advanced DP & State Optimization ====================
  610: [
    {"title": "Q1829. Longest Common Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-common-subsequence/", "description": "Medium | DP"},
    {"title": "Q1830. Shortest Common Supersequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-common-supersequence/", "description": "Hard | String DP"},
    {"title": "Q1831. Edit Distance", "platform": "LeetCode", "url": "https://leetcode.com/problems/edit-distance/", "description": "Hard | DP"}
  ],

  // ==================== DAY 611 — Advanced DP & State Optimization ====================
  611: [
    {"title": "Q1832. Distinct Subsequences", "platform": "LeetCode", "url": "https://leetcode.com/problems/distinct-subsequences/", "description": "Hard | DP"},
    {"title": "Q1833. Wildcard Matching", "platform": "LeetCode", "url": "https://leetcode.com/problems/wildcard-matching/", "description": "Hard | String DP"},
    {"title": "Q1834. Regular Expression Matching", "platform": "LeetCode", "url": "https://leetcode.com/problems/regular-expression-matching/", "description": "Hard | String DP"}
  ],

  // ==================== DAY 612 — Advanced DP & State Optimization ====================
  612: [
    {"title": "Q1835. Maximum Number of Points with Cost", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-number-of-points-with-cost/", "description": "Medium | Optimization DP"},
    {"title": "Q1836. Maximum Value of K Coins From Piles", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/", "description": "Hard | Knapsack DP"},
    {"title": "Q1837. Minimum Cost to Make at Least One Valid Path", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/", "description": "Hard | Graph DP"}
  ],

  // ==================== DAY 613 — Advanced DP & State Optimization ====================
  613: [
    {"title": "Q1838. Best Time to Buy and Sell Stock IV", "platform": "LeetCode", "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", "description": "Hard | Stock DP"},
    {"title": "Q1839. Minimum Number of Refueling Stops", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-refueling-stops/", "description": "Hard | Greedy DP"},
    {"title": "Q1840. Cherry Pickup", "platform": "LeetCode", "url": "https://leetcode.com/problems/cherry-pickup/", "description": "Hard | 2D DP"}
  ],
    // ==================== DAY 614 — Advanced Graphs & Network Optimization ====================
  614: [
    {"title": "Q1841. Network Delay Time", "platform": "LeetCode", "url": "https://leetcode.com/problems/network-delay-time/", "description": "Medium | Dijkstra"},
    {"title": "Q1842. Cheapest Flights Within K Stops", "platform": "LeetCode", "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/", "description": "Medium | Shortest Path"},
    {"title": "Q1843. Path With Minimum Effort", "platform": "LeetCode", "url": "https://leetcode.com/problems/path-with-minimum-effort/", "description": "Medium | Dijkstra"}
  ],

  // ==================== DAY 615 — Advanced Graphs & Network Optimization ====================
  615: [
    {"title": "Q1844. Swim in Rising Water", "platform": "LeetCode", "url": "https://leetcode.com/problems/swim-in-rising-water/", "description": "Hard | Graph Search"},
    {"title": "Q1845. Shortest Path in a Grid with Obstacles Elimination", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/", "description": "Hard | BFS"},
    {"title": "Q1846. Shortest Path Visiting All Nodes", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/", "description": "Hard | Bitmask BFS"}
  ],

  // ==================== DAY 616 — Advanced Graphs & Network Optimization ====================
  616: [
    {"title": "Q1847. Word Ladder", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-ladder/", "description": "Hard | BFS"},
    {"title": "Q1848. Word Ladder II", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-ladder-ii/", "description": "Hard | BFS"},
    {"title": "Q1849. Open the Lock", "platform": "LeetCode", "url": "https://leetcode.com/problems/open-the-lock/", "description": "Medium | BFS"}
  ],

  // ==================== DAY 617 — Advanced Graphs & Network Optimization ====================
  617: [
    {"title": "Q1850. Critical Connections in a Network", "platform": "LeetCode", "url": "https://leetcode.com/problems/critical-connections-in-a-network/", "description": "Hard | Tarjan Algorithm"},
    {"title": "Q1851. Articulation Points", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/articulation-point-1/1", "description": "Hard | Graph"},
    {"title": "Q1852. Bridges in a Graph", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/bridge-edge-in-graph/1", "description": "Hard | Graph"}
  ],

  // ==================== DAY 618 — Advanced Graphs & Network Optimization ====================
  618: [
    {"title": "Q1853. Strongly Connected Components", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1", "description": "Hard | SCC"},
    {"title": "Q1854. Alien Dictionary", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/alien-dictionary/1", "description": "Hard | Topological Sort"},
    {"title": "Q1855. Course Schedule II", "platform": "LeetCode", "url": "https://leetcode.com/problems/course-schedule-ii/", "description": "Medium | Topological Sort"}
  ],

  // ==================== DAY 619 — Advanced Graphs & Network Optimization ====================
  619: [
    {"title": "Q1856. Minimum Height Trees", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-height-trees/", "description": "Medium | Graph"},
    {"title": "Q1857. Find Eventual Safe States", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-eventual-safe-states/", "description": "Medium | Graph"},
    {"title": "Q1858. Parallel Courses", "platform": "LeetCode", "url": "https://leetcode.com/problems/parallel-courses/", "description": "Medium | Topological Sort"}
  ],

  // ==================== DAY 620 — Advanced Graphs & Network Optimization ====================
  620: [
    {"title": "Q1859. Accounts Merge", "platform": "LeetCode", "url": "https://leetcode.com/problems/accounts-merge/", "description": "Medium | DSU"},
    {"title": "Q1860. Number of Islands II", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-islands-ii/", "description": "Hard | DSU"},
    {"title": "Q1861. Regions Cut By Slashes", "platform": "LeetCode", "url": "https://leetcode.com/problems/regions-cut-by-slashes/", "description": "Medium | DSU"}
  ],

  // ==================== DAY 621 — Advanced Graphs & Network Optimization ====================
  621: [
    {"title": "Q1862. Redundant Connection", "platform": "LeetCode", "url": "https://leetcode.com/problems/redundant-connection/", "description": "Medium | DSU"},
    {"title": "Q1863. Redundant Connection II", "platform": "LeetCode", "url": "https://leetcode.com/problems/redundant-connection-ii/", "description": "Hard | DSU"},
    {"title": "Q1864. Minimize Malware Spread", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimize-malware-spread/", "description": "Hard | Graph"}
  ],

  // ==================== DAY 622 — Advanced Graphs & Network Optimization ====================
  622: [
    {"title": "Q1865. Minimum Spanning Tree", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1", "description": "Medium | MST"},
    {"title": "Q1866. Kruskal’s Algorithm", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1", "description": "Medium | MST"},
    {"title": "Q1867. Prim’s Algorithm", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1", "description": "Medium | MST"}
  ],

  // ==================== DAY 623 — Advanced Graphs & Network Optimization ====================
  623: [
    {"title": "Q1868. Maximum Flow Problem", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/maximum-flow-problem/1", "description": "Hard | Network Flow"},
    {"title": "Q1869. Min Cost Max Flow", "platform": "GFG", "url": "https://www.geeksforgeeks.org/", "description": "Hard | Network Flow"},
    {"title": "Q1870. Traveling Salesman Problem", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/travelling-salesman-problem/1", "description": "Hard | Bitmask DP"}
  ],
    // ==================== DAY 624 — Advanced Trees, BST & Tree DP ====================
  624: [
    {"title": "Q1871. Binary Tree Maximum Path Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/", "description": "Hard | Tree DP"},
    {"title": "Q1872. Serialize and Deserialize Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", "description": "Hard | Tree"},
    {"title": "Q1873. Construct Binary Tree from Preorder and Inorder", "platform": "LeetCode", "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", "description": "Medium | Tree"}
  ],

  // ==================== DAY 625 — Advanced Trees, BST & Tree DP ====================
  625: [
    {"title": "Q1874. Construct Binary Tree from Inorder and Postorder", "platform": "LeetCode", "url": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", "description": "Medium | Tree"},
    {"title": "Q1875. Binary Tree Cameras", "platform": "LeetCode", "url": "https://leetcode.com/problems/binary-tree-cameras/", "description": "Hard | Tree Greedy"},
    {"title": "Q1876. Recover Binary Search Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/recover-binary-search-tree/", "description": "Medium | BST"}
  ],

  // ==================== DAY 626 — Advanced Trees, BST & Tree DP ====================
  626: [
    {"title": "Q1877. Lowest Common Ancestor of a Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", "description": "Medium | Tree"},
    {"title": "Q1878. All Nodes Distance K in Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/", "description": "Medium | Tree BFS"},
    {"title": "Q1879. Vertical Order Traversal", "platform": "LeetCode", "url": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", "description": "Hard | Tree"}
  ],

  // ==================== DAY 627 — Advanced Trees, BST & Tree DP ====================
  627: [
    {"title": "Q1880. Maximum Width of Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-width-of-binary-tree/", "description": "Medium | Tree"},
    {"title": "Q1881. Count Complete Tree Nodes", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-complete-tree-nodes/", "description": "Medium | Tree"},
    {"title": "Q1882. Flatten Binary Tree to Linked List", "platform": "LeetCode", "url": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", "description": "Medium | Tree"}
  ],

  // ==================== DAY 628 — Advanced Trees, BST & Tree DP ====================
  628: [
    {"title": "Q1883. Path Sum III", "platform": "LeetCode", "url": "https://leetcode.com/problems/path-sum-iii/", "description": "Medium | Tree DFS"},
    {"title": "Q1884. House Robber III", "platform": "LeetCode", "url": "https://leetcode.com/problems/house-robber-iii/", "description": "Medium | Tree DP"},
    {"title": "Q1885. Find Duplicate Subtrees", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-duplicate-subtrees/", "description": "Medium | Tree"}
  ],

  // ==================== DAY 629 — Advanced Trees, BST & Tree DP ====================
  629: [
    {"title": "Q1886. Binary Search Tree Iterator", "platform": "LeetCode", "url": "https://leetcode.com/problems/binary-search-tree-iterator/", "description": "Medium | BST"},
    {"title": "Q1887. Kth Smallest Element in a BST", "platform": "LeetCode", "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", "description": "Medium | BST"},
    {"title": "Q1888. Two Sum IV", "platform": "LeetCode", "url": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/", "description": "Medium | BST"}
  ],

  // ==================== DAY 630 — Advanced Trees, BST & Tree DP ====================
  630: [
    {"title": "Q1889. Trim a Binary Search Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/trim-a-binary-search-tree/", "description": "Medium | BST"},
    {"title": "Q1890. Delete Node in a BST", "platform": "LeetCode", "url": "https://leetcode.com/problems/delete-node-in-a-bst/", "description": "Medium | BST"},
    {"title": "Q1891. Convert Sorted Array to BST", "platform": "LeetCode", "url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", "description": "Easy | BST"}
  ],

  // ==================== DAY 631 — Advanced Trees, BST & Tree DP ====================
  631: [
    {"title": "Q1892. Balance a Binary Search Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/balance-a-binary-search-tree/", "description": "Medium | BST"},
    {"title": "Q1893. Maximum Sum BST in Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/", "description": "Hard | Tree DP"},
    {"title": "Q1894. Largest BST Subtree", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/largest-bst/1", "description": "Hard | Tree DP"}
  ],

  // ==================== DAY 632 — Advanced Trees, BST & Tree DP ====================
  632: [
    {"title": "Q1895. Morris Inorder Traversal", "platform": "GFG", "url": "https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/", "description": "Medium | Tree Traversal"},
    {"title": "Q1896. Morris Preorder Traversal", "platform": "GFG", "url": "https://www.geeksforgeeks.org/morris-traversal-for-preorder/", "description": "Medium | Tree Traversal"},
    {"title": "Q1897. Binary Tree to DLL", "platform": "GFG", "url": "https://www.geeksforgeeks.org/convert-a-binary-tree-to-a-doubly-linked-list/", "description": "Medium | Tree"}
  ],

  // ==================== DAY 633 — Advanced Trees, BST & Tree DP ====================
  633: [
    {"title": "Q1898. Tree Diameter", "platform": "LeetCode", "url": "https://leetcode.com/problems/tree-diameter/", "description": "Medium | Tree DP"},
    {"title": "Q1899. Sum of Distances in Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/sum-of-distances-in-tree/", "description": "Hard | Tree DP"},
    {"title": "Q1900. Maximum Genetic Difference Query", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-genetic-difference-query/", "description": "Hard | Trie + Tree"}
  ],  // ==================== DAY 634 — Advanced Trie & String Matching ====================
  634: [
    {"title": "Q1901. Implement Trie", "platform": "LeetCode", "url": "https://leetcode.com/problems/implement-trie-prefix-tree/", "description": "Medium | Trie"},
    {"title": "Q1902. Word Search II", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-search-ii/", "description": "Hard | Trie + Backtracking"},
    {"title": "Q1903. Design Add and Search Words", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/", "description": "Medium | Trie"}
  ],

  // ==================== DAY 635 — Advanced Trie & String Matching ====================
  635: [
    {"title": "Q1904. Replace Words", "platform": "LeetCode", "url": "https://leetcode.com/problems/replace-words/", "description": "Medium | Trie"},
    {"title": "Q1905. Longest Word in Dictionary", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-word-in-dictionary/", "description": "Medium | Trie"},
    {"title": "Q1906. Map Sum Pairs", "platform": "LeetCode", "url": "https://leetcode.com/problems/map-sum-pairs/", "description": "Medium | Trie"}
  ],

  // ==================== DAY 636 — Advanced Trie & String Matching ====================
  636: [
    {"title": "Q1907. Maximum XOR of Two Numbers", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", "description": "Medium | Bitwise Trie"},
    {"title": "Q1908. Maximum XOR With an Element From Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/", "description": "Hard | Bitwise Trie"},
    {"title": "Q1909. Count Pairs With XOR in a Range", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-pairs-with-xor-in-a-range/", "description": "Hard | Bitwise Trie"}
  ],

  // ==================== DAY 637 — Advanced Trie & String Matching ====================
  637: [
    {"title": "Q1910. Shortest Palindrome", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-palindrome/", "description": "Hard | KMP"},
    {"title": "Q1911. Repeated String Match", "platform": "LeetCode", "url": "https://leetcode.com/problems/repeated-string-match/", "description": "Medium | String Matching"},
    {"title": "Q1912. KMP Pattern Matching", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/search-pattern0205/1", "description": "Medium | KMP"}
  ],

  // ==================== DAY 638 — Advanced Trie & String Matching ====================
  638: [
    {"title": "Q1913. Z Algorithm", "platform": "GFG", "url": "https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/", "description": "Medium | String Matching"},
    {"title": "Q1914. Rabin-Karp Algorithm", "platform": "GFG", "url": "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/", "description": "Medium | String Matching"},
    {"title": "Q1915. Longest Duplicate Substring", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-duplicate-substring/", "description": "Hard | Rolling Hash"}
  ],

  // ==================== DAY 639 — Advanced Trie & String Matching ====================
  639: [
    {"title": "Q1916. Repeated DNA Sequences", "platform": "LeetCode", "url": "https://leetcode.com/problems/repeated-dna-sequences/", "description": "Medium | Hashing"},
    {"title": "Q1917. String Compression II", "platform": "LeetCode", "url": "https://leetcode.com/problems/string-compression-ii/", "description": "Hard | DP"},
    {"title": "Q1918. Decode String", "platform": "LeetCode", "url": "https://leetcode.com/problems/decode-string/", "description": "Medium | Stack"}
  ],

  // ==================== DAY 640 — Advanced Trie & String Matching ====================
  640: [
    {"title": "Q1919. Basic Calculator", "platform": "LeetCode", "url": "https://leetcode.com/problems/basic-calculator/", "description": "Hard | Stack"},
    {"title": "Q1920. Basic Calculator II", "platform": "LeetCode", "url": "https://leetcode.com/problems/basic-calculator-ii/", "description": "Medium | Stack"},
    {"title": "Q1921. Basic Calculator III", "platform": "LeetCode", "url": "https://leetcode.com/problems/basic-calculator-iii/", "description": "Hard | Stack"}
  ],

  // ==================== DAY 641 — Advanced Trie & String Matching ====================
  641: [
    {"title": "Q1922. Text Justification", "platform": "LeetCode", "url": "https://leetcode.com/problems/text-justification/", "description": "Hard | String"},
    {"title": "Q1923. Valid Number", "platform": "LeetCode", "url": "https://leetcode.com/problems/valid-number/", "description": "Hard | String Parsing"},
    {"title": "Q1924. Simplify Path", "platform": "LeetCode", "url": "https://leetcode.com/problems/simplify-path/", "description": "Medium | Stack"}
  ],

  // ==================== DAY 642 — Advanced Trie & String Matching ====================
  642: [
    {"title": "Q1925. Minimum Remove to Make Valid Parentheses", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/", "description": "Medium | Stack"},
    {"title": "Q1926. Remove Invalid Parentheses", "platform": "LeetCode", "url": "https://leetcode.com/problems/remove-invalid-parentheses/", "description": "Hard | BFS + Backtracking"},
    {"title": "Q1927. Longest Valid Parentheses", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-valid-parentheses/", "description": "Hard | Stack + DP"}
  ],

  // ==================== DAY 643 — Advanced Trie & String Matching ====================
  643: [
    {"title": "Q1928. Find All Anagrams in a String", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string/", "description": "Medium | Sliding Window"},
    {"title": "Q1929. Minimum Window Substring", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-window-substring/", "description": "Hard | Sliding Window"},
    {"title": "Q1930. Sliding Window Maximum", "platform": "LeetCode", "url": "https://leetcode.com/problems/sliding-window-maximum/", "description": "Hard | Monotonic Deque"}
  ],  // ==================== DAY 644 — Advanced Greedy & Scheduling ====================
  644: [
    {"title": "Q1931. Jump Game II", "platform": "LeetCode", "url": "https://leetcode.com/problems/jump-game-ii/", "description": "Medium | Greedy"},
    {"title": "Q1932. Minimum Number of Refueling Stops", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-refueling-stops/", "description": "Hard | Greedy + Heap"},
    {"title": "Q1933. Gas Station", "platform": "LeetCode", "url": "https://leetcode.com/problems/gas-station/", "description": "Medium | Greedy"}
  ],

  // ==================== DAY 645 — Advanced Greedy & Scheduling ====================
  645: [
    {"title": "Q1934. Candy", "platform": "LeetCode", "url": "https://leetcode.com/problems/candy/", "description": "Hard | Greedy"},
    {"title": "Q1935. Queue Reconstruction by Height", "platform": "LeetCode", "url": "https://leetcode.com/problems/queue-reconstruction-by-height/", "description": "Medium | Greedy"},
    {"title": "Q1936. Minimum Cost to Hire K Workers", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/", "description": "Hard | Greedy + Heap"}
  ],

  // ==================== DAY 646 — Advanced Greedy & Scheduling ====================
  646: [
    {"title": "Q1937. IPO", "platform": "LeetCode", "url": "https://leetcode.com/problems/ipo/", "description": "Hard | Greedy + Heap"},
    {"title": "Q1938. Maximum Performance of a Team", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-performance-of-a-team/", "description": "Hard | Greedy + Heap"},
    {"title": "Q1939. Task Scheduler", "platform": "LeetCode", "url": "https://leetcode.com/problems/task-scheduler/", "description": "Medium | Greedy"}
  ],

  // ==================== DAY 647 — Advanced Greedy & Scheduling ====================
  647: [
    {"title": "Q1940. Rearrange String K Distance Apart", "platform": "LeetCode", "url": "https://leetcode.com/problems/rearrange-string-k-distance-apart/", "description": "Hard | Greedy + Heap"},
    {"title": "Q1941. Rearrange Barcodes", "platform": "LeetCode", "url": "https://leetcode.com/problems/distant-barcodes/", "description": "Medium | Greedy"},
    {"title": "Q1942. Minimum Cost to Connect Sticks", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-connect-sticks/", "description": "Medium | Heap"}
  ],

  // ==================== DAY 648 — Advanced Greedy & Scheduling ====================
  648: [
    {"title": "Q1943. Huffman Encoding", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/huffman-encoding/1", "description": "Medium | Greedy"},
    {"title": "Q1944. Partition Labels", "platform": "LeetCode", "url": "https://leetcode.com/problems/partition-labels/", "description": "Medium | Greedy"},
    {"title": "Q1945. Wiggle Subsequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/wiggle-subsequence/", "description": "Medium | Greedy + DP"}
  ],

  // ==================== DAY 649 — Advanced Greedy & Scheduling ====================
  649: [
    {"title": "Q1946. Maximum Length of Pair Chain", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-length-of-pair-chain/", "description": "Medium | Greedy"},
    {"title": "Q1947. Minimum Deletions to Make Character Frequencies Unique", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/", "description": "Medium | Greedy"},
    {"title": "Q1948. Maximum Gap", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-gap/", "description": "Medium | Bucket Sort"}
  ],

  // ==================== DAY 650 — Advanced Greedy & Scheduling ====================
  650: [
    {"title": "Q1949. Maximum Number of Events That Can Be Attended", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/", "description": "Medium | Greedy + Heap"},
    {"title": "Q1950. Maximum Number of Events That Can Be Attended II", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/", "description": "Hard | DP + Binary Search"},
    {"title": "Q1951. Meeting Rooms III", "platform": "LeetCode", "url": "https://leetcode.com/problems/meeting-rooms-iii/", "description": "Hard | Scheduling + Heap"}
  ],

  // ==================== DAY 651 — Advanced Greedy & Scheduling ====================
  651: [
    {"title": "Q1952. Minimum Platforms", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1", "description": "Medium | Greedy"},
    {"title": "Q1953. Job Sequencing Problem", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1", "description": "Medium | Greedy"},
    {"title": "Q1954. Fractional Knapsack", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1", "description": "Medium | Greedy"}
  ],

  // ==================== DAY 652 — Advanced Greedy & Scheduling ====================
  652: [
    {"title": "Q1955. Minimum Number of Taps to Open to Water a Garden", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/", "description": "Hard | Greedy"},
    {"title": "Q1956. Video Stitching", "platform": "LeetCode", "url": "https://leetcode.com/problems/video-stitching/", "description": "Medium | Greedy"},
    {"title": "Q1957. Non-overlapping Intervals", "platform": "LeetCode", "url": "https://leetcode.com/problems/non-overlapping-intervals/", "description": "Medium | Greedy"}
  ],

  // ==================== DAY 653 — Advanced Greedy & Scheduling ====================
  653: [
    {"title": "Q1958. Minimum Arrows to Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", "description": "Medium | Greedy"},
    {"title": "Q1959. Employee Free Time", "platform": "LeetCode", "url": "https://leetcode.com/problems/employee-free-time/", "description": "Hard | Intervals"},
    {"title": "Q1960. Maximum Units on a Truck", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-units-on-a-truck/", "description": "Easy | Greedy"}
  ],  // ==================== DAY 654 — Bitmasking, Number Theory & Game DP ====================
  654: [
    {"title": "Q1961. Single Number III", "platform": "LeetCode", "url": "https://leetcode.com/problems/single-number-iii/", "description": "Medium | Bit Manipulation"},
    {"title": "Q1962. Bitwise AND of Numbers Range", "platform": "LeetCode", "url": "https://leetcode.com/problems/bitwise-and-of-numbers-range/", "description": "Medium | Bit Manipulation"},
    {"title": "Q1963. Counting Bits", "platform": "LeetCode", "url": "https://leetcode.com/problems/counting-bits/", "description": "Easy | Bit DP"}
  ],

  // ==================== DAY 655 — Bitmasking, Number Theory & Game DP ====================
  655: [
    {"title": "Q1964. Sum of Two Integers", "platform": "LeetCode", "url": "https://leetcode.com/problems/sum-of-two-integers/", "description": "Medium | Bit Manipulation"},
    {"title": "Q1965. Minimum Flips to Make a OR b Equal to c", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/", "description": "Medium | Bit Manipulation"},
    {"title": "Q1966. Maximum Length of a Concatenated String with Unique Characters", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/", "description": "Medium | Bitmask + Backtracking"}
  ],

  // ==================== DAY 656 — Bitmasking, Number Theory & Game DP ====================
  656: [
    {"title": "Q1967. Smallest Sufficient Team", "platform": "LeetCode", "url": "https://leetcode.com/problems/smallest-sufficient-team/", "description": "Hard | Bitmask DP"},
    {"title": "Q1968. Parallel Courses II", "platform": "LeetCode", "url": "https://leetcode.com/problems/parallel-courses-ii/", "description": "Hard | Bitmask DP"},
    {"title": "Q1969. Maximum Students Taking Exam", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-students-taking-exam/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 657 — Bitmasking, Number Theory & Game DP ====================
  657: [
    {"title": "Q1970. Can I Win", "platform": "LeetCode", "url": "https://leetcode.com/problems/can-i-win/", "description": "Medium | Game DP"},
    {"title": "Q1971. Flip Game II", "platform": "LeetCode", "url": "https://leetcode.com/problems/flip-game-ii/", "description": "Medium | Game Theory"},
    {"title": "Q1972. Beautiful Arrangement", "platform": "LeetCode", "url": "https://leetcode.com/problems/beautiful-arrangement/", "description": "Medium | Bitmask DP"}
  ],

  // ==================== DAY 658 — Bitmasking, Number Theory & Game DP ====================
  658: [
    {"title": "Q1973. Matchsticks to Square", "platform": "LeetCode", "url": "https://leetcode.com/problems/matchsticks-to-square/", "description": "Medium | Bitmask + Backtracking"},
    {"title": "Q1974. Partition to K Equal Sum Subsets", "platform": "LeetCode", "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/", "description": "Medium | Bitmask DP"},
    {"title": "Q1975. Traveling Salesman Problem", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/travelling-salesman-problem/1", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 659 — Bitmasking, Number Theory & Game DP ====================
  659: [
    {"title": "Q1976. Hamiltonian Cycle", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/hamiltonian-cycle/1", "description": "Hard | Bitmask DP"},
    {"title": "Q1977. Hamiltonian Path", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/hamiltonian-path/1", "description": "Hard | Bitmask DP"},
    {"title": "Q1978. Minimum XOR Sum of Two Arrays", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 660 — Bitmasking, Number Theory & Game DP ====================
  660: [
    {"title": "Q1979. Number of Ways to Wear Different Hats", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/", "description": "Hard | Bitmask DP"},
    {"title": "Q1980. Maximum Compatibility Score Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-compatibility-score-sum/", "description": "Medium | Bitmask DP"},
    {"title": "Q1981. Maximum AND Sum of Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-and-sum-of-array/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 661 — Bitmasking, Number Theory & Game DP ====================
  661: [
    {"title": "Q1982. Minimum Number of Work Sessions", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/", "description": "Medium | Bitmask DP"},
    {"title": "Q1983. Maximum Score from Performing Multiplication Operations", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/", "description": "Medium | DP"},
    {"title": "Q1984. Assignment Problem Using Bitmask", "platform": "GFG", "url": "https://www.geeksforgeeks.org/assignment-problem-using-bitmask/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 662 — Bitmasking, Number Theory & Game DP ====================
  662: [
    {"title": "Q1985. Minimum Cost Matching", "platform": "GFG", "url": "https://www.geeksforgeeks.org/", "description": "Hard | Bitmask DP"},
    {"title": "Q1986. Subset Partition DP", "platform": "GFG", "url": "https://www.geeksforgeeks.org/", "description": "Hard | Bitmask DP"},
    {"title": "Q1987. Number of Ways to Assign Hats", "platform": "LeetCode", "url": "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 663 — Bitmasking, Number Theory & Game DP ====================
  663: [
    {"title": "Q1988. Stone Game", "platform": "LeetCode", "url": "https://leetcode.com/problems/stone-game/", "description": "Medium | Game DP"},
    {"title": "Q1989. Stone Game II", "platform": "LeetCode", "url": "https://leetcode.com/problems/stone-game-ii/", "description": "Medium | Game DP"},
    {"title": "Q1990. Stone Game III", "platform": "LeetCode", "url": "https://leetcode.com/problems/stone-game-iii/", "description": "Hard | Game DP"}
  ],  // ==================== DAY 664 — Computational Geometry & Sweep Line ====================
  664: [
    {"title": "Q1991. Max Points on a Line", "platform": "LeetCode", "url": "https://leetcode.com/problems/max-points-on-a-line/", "description": "Hard | Geometry"},
    {"title": "Q1992. Check if It Is a Straight Line", "platform": "LeetCode", "url": "https://leetcode.com/problems/check-if-it-is-a-straight-line/", "description": "Easy | Geometry"},
    {"title": "Q1993. Valid Square", "platform": "LeetCode", "url": "https://leetcode.com/problems/valid-square/", "description": "Medium | Geometry"}
  ],

  // ==================== DAY 665 — Computational Geometry & Sweep Line ====================
  665: [
    {"title": "Q1994. Rectangle Overlap", "platform": "LeetCode", "url": "https://leetcode.com/problems/rectangle-overlap/", "description": "Easy | Geometry"},
    {"title": "Q1995. Rectangle Area", "platform": "LeetCode", "url": "https://leetcode.com/problems/rectangle-area/", "description": "Medium | Geometry"},
    {"title": "Q1996. Perfect Rectangle", "platform": "LeetCode", "url": "https://leetcode.com/problems/perfect-rectangle/", "description": "Hard | Geometry"}
  ],

  // ==================== DAY 666 — Computational Geometry & Sweep Line ====================
  666: [
    {"title": "Q1997. The Skyline Problem", "platform": "LeetCode", "url": "https://leetcode.com/problems/the-skyline-problem/", "description": "Hard | Sweep Line"},
    {"title": "Q1998. Rectangle Area II", "platform": "LeetCode", "url": "https://leetcode.com/problems/rectangle-area-ii/", "description": "Hard | Sweep Line"},
    {"title": "Q1999. Falling Squares", "platform": "LeetCode", "url": "https://leetcode.com/problems/falling-squares/", "description": "Hard | Segment Tree"}
  ],

  // ==================== DAY 667 — Computational Geometry & Sweep Line ====================
  667: [
    {"title": "Q2000. Minimum Area Rectangle", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-area-rectangle/", "description": "Medium | Geometry"},
    {"title": "Q2001. Minimum Area Rectangle II", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-area-rectangle-ii/", "description": "Medium | Geometry"},
    {"title": "Q2002. Erect the Fence", "platform": "LeetCode", "url": "https://leetcode.com/problems/erect-the-fence/", "description": "Hard | Convex Hull"}
  ],

  // ==================== DAY 668 — Computational Geometry & Sweep Line ====================
  668: [
    {"title": "Q2003. Convex Hull", "platform": "GFG", "url": "https://www.geeksforgeeks.org/convex-hull-using-graham-scan/", "description": "Hard | Geometry"},
    {"title": "Q2004. Closest Pair of Points", "platform": "GFG", "url": "https://www.geeksforgeeks.org/closest-pair-of-points-using-divide-and-conquer-algorithm/", "description": "Hard | Geometry"},
    {"title": "Q2005. Meeting Rooms II", "platform": "LeetCode", "url": "https://leetcode.com/problems/meeting-rooms-ii/", "description": "Medium | Sweep Line"}
  ],

  // ==================== DAY 669 — Computational Geometry & Sweep Line ====================
  669: [
    {"title": "Q2006. Count of Range Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-of-range-sum/", "description": "Hard | Segment Tree"},
    {"title": "Q2007. Merge Intervals", "platform": "LeetCode", "url": "https://leetcode.com/problems/merge-intervals/", "description": "Medium | Intervals"},
    {"title": "Q2008. Insert Interval", "platform": "LeetCode", "url": "https://leetcode.com/problems/insert-interval/", "description": "Medium | Intervals"}
  ],

  // ==================== DAY 670 — Computational Geometry & Sweep Line ====================
  670: [
    {"title": "Q2009. My Calendar III", "platform": "LeetCode", "url": "https://leetcode.com/problems/my-calendar-iii/", "description": "Hard | Sweep Line"},
    {"title": "Q2010. Employee Free Time", "platform": "LeetCode", "url": "https://leetcode.com/problems/employee-free-time/", "description": "Hard | Intervals"},
    {"title": "Q2011. Minimum Number of Arrows to Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", "description": "Medium | Greedy"}
  ],

  // ==================== DAY 671 — Computational Geometry & Sweep Line ====================
  671: [
    {"title": "Q2012. Count of Smaller Numbers After Self", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", "description": "Hard | Fenwick Tree"},
    {"title": "Q2013. Reverse Pairs", "platform": "LeetCode", "url": "https://leetcode.com/problems/reverse-pairs/", "description": "Hard | Merge Sort"},
    {"title": "Q2014. Create Sorted Array through Instructions", "platform": "LeetCode", "url": "https://leetcode.com/problems/create-sorted-array-through-instructions/", "description": "Hard | Fenwick Tree"}
  ],

  // ==================== DAY 672 — Computational Geometry & Sweep Line ====================
  672: [
    {"title": "Q2015. Range Module", "platform": "LeetCode", "url": "https://leetcode.com/problems/range-module/", "description": "Hard | Segment Tree"},
    {"title": "Q2016. Rectangle Overlap Counting", "platform": "GFG", "url": "https://www.geeksforgeeks.org/", "description": "Medium | Geometry"},
    {"title": "Q2017. Sweep Line Maximum Overlap", "platform": "GFG", "url": "https://www.geeksforgeeks.org/", "description": "Medium | Sweep Line"}
  ],

  // ==================== DAY 673 — Computational Geometry & Sweep Line ====================
  673: [
    {"title": "Q2018. K Closest Points to Origin", "platform": "LeetCode", "url": "https://leetcode.com/problems/k-closest-points-to-origin/", "description": "Medium | Heap"},
    {"title": "Q2019. Find K Pairs with Smallest Sums", "platform": "LeetCode", "url": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", "description": "Medium | Heap"},
    {"title": "Q2020. Maximum Number of Events That Can Be Attended", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/", "description": "Medium | Greedy"}
  ],  // ==================== DAY 674 — Codeforces Expert Contest Practice ====================
  674: [
    {"title": "Q2021. CF 1600+ Implementation", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=implementation", "description": "Medium | Implementation"},
    {"title": "Q2022. CF 1700+ Greedy", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=greedy", "description": "Hard | Greedy"},
    {"title": "Q2023. CF 1800+ Binary Search", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=binary+search", "description": "Hard | Binary Search"}
  ],

  // ==================== DAY 675 — Codeforces Expert Contest Practice ====================
  675: [
    {"title": "Q2024. CF 1800+ DP", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=dp", "description": "Hard | DP"},
    {"title": "Q2025. CF 1900+ Graph", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=graphs", "description": "Hard | Graph"},
    {"title": "Q2026. CF 2000+ Tree", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=trees", "description": "Hard | Trees"}
  ],

  // ==================== DAY 676 — Codeforces Expert Contest Practice ====================
  676: [
    {"title": "Q2027. CF Advanced Number Theory", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=number+theory", "description": "Hard | Number Theory"},
    {"title": "Q2028. CF Advanced Combinatorics", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=combinatorics", "description": "Hard | Combinatorics"},
    {"title": "Q2029. CF Constructive Algorithms", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=constructive+algorithms", "description": "Hard | Constructive"}
  ],

  // ==================== DAY 677 — Codeforces Expert Contest Practice ====================
  677: [
    {"title": "Q2030. CF Advanced Strings", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=strings", "description": "Hard | Strings"},
    {"title": "Q2031. CF Bitmask DP", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=bitmasks", "description": "Hard | Bitmask DP"},
    {"title": "Q2032. CF Segment Tree", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags= segment+tree", "description": "Hard | Segment Tree"}
  ],

  // ==================== DAY 678 — Codeforces Expert Contest Practice ====================
  678: [
    {"title": "Q2033. CF Fenwick Tree", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=fenwick+tree", "description": "Hard | Fenwick Tree"},
    {"title": "Q2034. CF Sparse Table", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=sparse+table", "description": "Hard | Sparse Table"},
    {"title": "Q2035. CF DSU Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=dsu", "description": "Hard | DSU"}
  ],

  // ==================== DAY 679 — Codeforces Expert Contest Practice ====================
  679: [
    {"title": "Q2036. CF Shortest Paths", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=shortest+paths", "description": "Hard | Shortest Paths"},
    {"title": "Q2037. CF Minimum Spanning Tree", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=minimum+spanning+tree", "description": "Hard | MST"},
    {"title": "Q2038. CF SCC Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=strongly+connected+components", "description": "Hard | SCC"}
  ],

  // ==================== DAY 680 — Codeforces Expert Contest Practice ====================
  680: [
    {"title": "Q2039. CF Game Theory", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=games", "description": "Hard | Game Theory"},
    {"title": "Q2040. CF Probability", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=probabilities", "description": "Hard | Probability"},
    {"title": "Q2041. CF Geometry", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=geometry", "description": "Hard | Geometry"}
  ],

  // ==================== DAY 681 — Codeforces Expert Contest Practice ====================
  681: [
    {"title": "Q2042. CF Interactive Problem", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=interactive", "description": "Hard | Interactive"},
    {"title": "Q2043. CF 2000+ Math", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=math", "description": "Hard | Math"},
    {"title": "Q2044. CF 2100+ DP", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=dp", "description": "Hard | DP"}
  ],

  // ==================== DAY 682 — Codeforces Expert Contest Practice ====================
  682: [
    {"title": "Q2045. CF 2100+ Graph", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=graphs", "description": "Hard | Graph"},
    {"title": "Q2046. CF 2200+ Greedy", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=greedy", "description": "Hard | Greedy"},
    {"title": "Q2047. CF 2200+ Data Structures", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=data+structures", "description": "Hard | Data Structures"}
  ],

  // ==================== DAY 683 — Codeforces Expert Contest Practice ====================
  683: [
    {"title": "Q2048. CF 2200+ Number Theory", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=number+theory", "description": "Hard | Number Theory"},
    {"title": "Q2049. CF 2300+ DP", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=dp", "description": "Hard | DP"},
    {"title": "Q2050. CF 2300+ Graph", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=graphs", "description": "Hard | Graph"}
  ],  // ==================== DAY 684 — Expert DSA Final Interview Challenge ====================
  684: [
    {"title": "Q2051. Median of Two Sorted Arrays", "platform": "LeetCode", "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/", "description": "Hard | Binary Search"},
    {"title": "Q2052. Trapping Rain Water II", "platform": "LeetCode", "url": "https://leetcode.com/problems/trapping-rain-water-ii/", "description": "Hard | Heap + BFS"},
    {"title": "Q2053. Largest Rectangle in Histogram", "platform": "LeetCode", "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/", "description": "Hard | Monotonic Stack"}
  ],

  // ==================== DAY 685 — Expert DSA Final Interview Challenge ====================
  685: [
    {"title": "Q2054. Maximum Profit in Job Scheduling", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", "description": "Hard | DP + Binary Search"},
    {"title": "Q2055. Maximum Profit with K Transactions", "platform": "LeetCode", "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", "description": "Hard | Stock DP"},
    {"title": "Q2056. Minimum Cost to Make Array Equal", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-make-array-equal/", "description": "Hard | Greedy + Binary Search"}
  ],

  // ==================== DAY 686 — Expert DSA Final Interview Challenge ====================
  686: [
    {"title": "Q2057. Longest Increasing Path in a Matrix", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/", "description": "Hard | DFS + DP"},
    {"title": "Q2058. Cherry Pickup", "platform": "LeetCode", "url": "https://leetcode.com/problems/cherry-pickup/", "description": "Hard | 2D DP"},
    {"title": "Q2059. Dungeon Game", "platform": "LeetCode", "url": "https://leetcode.com/problems/dungeon-game/", "description": "Hard | DP"}
  ],

  // ==================== DAY 687 — Expert DSA Final Interview Challenge ====================
  687: [
    {"title": "Q2060. Sudoku Solver", "platform": "LeetCode", "url": "https://leetcode.com/problems/sudoku-solver/", "description": "Hard | Backtracking"},
    {"title": "Q2061. N-Queens", "platform": "LeetCode", "url": "https://leetcode.com/problems/n-queens/", "description": "Hard | Backtracking"},
    {"title": "Q2062. Expression Add Operators", "platform": "LeetCode", "url": "https://leetcode.com/problems/expression-add-operators/", "description": "Hard | Backtracking"}
  ],

  // ==================== DAY 688 — Expert DSA Final Interview Challenge ====================
  688: [
    {"title": "Q2063. Word Search II", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-search-ii/", "description": "Hard | Trie + Backtracking"},
    {"title": "Q2064. Remove Boxes", "platform": "LeetCode", "url": "https://leetcode.com/problems/remove-boxes/", "description": "Hard | Interval DP"},
    {"title": "Q2065. Freedom Trail", "platform": "LeetCode", "url": "https://leetcode.com/problems/freedom-trail/", "description": "Hard | DP"}
  ],

  // ==================== DAY 689 — Expert DSA Final Interview Challenge ====================
  689: [
    {"title": "Q2066. Shortest Path Visiting All Nodes", "platform": "LeetCode", "url": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/", "description": "Hard | Bitmask BFS"},
    {"title": "Q2067. Reconstruct Itinerary", "platform": "LeetCode", "url": "https://leetcode.com/problems/reconstruct-itinerary/", "description": "Hard | Graph + Eulerian Path"},
    {"title": "Q2068. Minimum Cost to Connect All Points", "platform": "LeetCode", "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/", "description": "Medium | MST"}
  ],

  // ==================== DAY 690 — Expert DSA Final Interview Challenge ====================
  690: [
    {"title": "Q2069. Critical Connections in a Network", "platform": "LeetCode", "url": "https://leetcode.com/problems/critical-connections-in-a-network/", "description": "Hard | Tarjan Algorithm"},
    {"title": "Q2070. Maximum Flow", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/maximum-flow-problem/1", "description": "Hard | Network Flow"},
    {"title": "Q2071. Min Cost Max Flow", "platform": "GFG", "url": "https://www.geeksforgeeks.org/", "description": "Hard | Network Flow"}
  ],

  // ==================== DAY 691 — Expert DSA Final Interview Challenge ====================
  691: [
    {"title": "Q2072. Burst Balloons", "platform": "LeetCode", "url": "https://leetcode.com/problems/burst-balloons/", "description": "Hard | Interval DP"},
    {"title": "Q2073. Minimum Cost to Merge Stones", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-cost-to-merge-stones/", "description": "Hard | Interval DP"},
    {"title": "Q2074. Strange Printer", "platform": "LeetCode", "url": "https://leetcode.com/problems/strange-printer/", "description": "Hard | Interval DP"}
  ],

  // ==================== DAY 692 — Expert DSA Final Interview Challenge ====================
  692: [
    {"title": "Q2075. Count of Range Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/count-of-range-sum/", "description": "Hard | Merge Sort"},
    {"title": "Q2076. Reverse Pairs", "platform": "LeetCode", "url": "https://leetcode.com/problems/reverse-pairs/", "description": "Hard | Merge Sort"},
    {"title": "Q2077. Sliding Window Median", "platform": "LeetCode", "url": "https://leetcode.com/problems/sliding-window-median/", "description": "Hard | Two Heaps"}
  ],

  // ==================== DAY 693 — Expert DSA Final Interview Challenge ====================
  693: [
    {"title": "Q2078. LFU Cache", "platform": "LeetCode", "url": "https://leetcode.com/problems/lfu-cache/", "description": "Hard | Design"},
    {"title": "Q2079. Design In-Memory File System", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-in-memory-file-system/", "description": "Hard | Design + Trie"},
    {"title": "Q2080. Design Search Autocomplete System", "platform": "LeetCode", "url": "https://leetcode.com/problems/design-search-autocomplete-system/", "description": "Hard | Design + Trie"}
  ],  // ==================== DAY 694 — Final DSA Mastery & Contest Practice ====================
  694: [
    {"title": "Q2081. Product of Array Except Self", "platform": "LeetCode", "url": "https://leetcode.com/problems/product-of-array-except-self/", "description": "Medium | Arrays"},
    {"title": "Q2082. Subarray Sum Equals K", "platform": "LeetCode", "url": "https://leetcode.com/problems/subarray-sum-equals-k/", "description": "Medium | Prefix Sum + Hashing"},
    {"title": "Q2083. Longest Consecutive Sequence", "platform": "LeetCode", "url": "https://leetcode.com/problems/longest-consecutive-sequence/", "description": "Medium | Hashing"}
  ],

  // ==================== DAY 695 — Final DSA Mastery & Contest Practice ====================
  695: [
    {"title": "Q2084. Trapping Rain Water", "platform": "LeetCode", "url": "https://leetcode.com/problems/trapping-rain-water/", "description": "Hard | Two Pointers"},
    {"title": "Q2085. Sliding Window Maximum", "platform": "LeetCode", "url": "https://leetcode.com/problems/sliding-window-maximum/", "description": "Hard | Monotonic Deque"},
    {"title": "Q2086. Minimum Window Substring", "platform": "LeetCode", "url": "https://leetcode.com/problems/minimum-window-substring/", "description": "Hard | Sliding Window"}
  ],

  // ==================== DAY 696 — Final DSA Mastery & Contest Practice ====================
  696: [
    {"title": "Q2087. Edit Distance", "platform": "LeetCode", "url": "https://leetcode.com/problems/edit-distance/", "description": "Hard | DP"},
    {"title": "Q2088. Wildcard Matching", "platform": "LeetCode", "url": "https://leetcode.com/problems/wildcard-matching/", "description": "Hard | String DP"},
    {"title": "Q2089. Regular Expression Matching", "platform": "LeetCode", "url": "https://leetcode.com/problems/regular-expression-matching/", "description": "Hard | String DP"}
  ],

  // ==================== DAY 697 — Final DSA Mastery & Contest Practice ====================
  697: [
    {"title": "Q2090. Median of Two Sorted Arrays", "platform": "LeetCode", "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/", "description": "Hard | Binary Search"},
    {"title": "Q2091. Kth Largest Element in an Array", "platform": "LeetCode", "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/", "description": "Medium | Heap + Quickselect"},
    {"title": "Q2092. Top K Frequent Elements", "platform": "LeetCode", "url": "https://leetcode.com/problems/top-k-frequent-elements/", "description": "Medium | Heap + Hashing"}
  ],

  // ==================== DAY 698 — Final DSA Mastery & Contest Practice ====================
  698: [
    {"title": "Q2093. Merge Intervals", "platform": "LeetCode", "url": "https://leetcode.com/problems/merge-intervals/", "description": "Medium | Intervals"},
    {"title": "Q2094. Insert Interval", "platform": "LeetCode", "url": "https://leetcode.com/problems/insert-interval/", "description": "Medium | Intervals"},
    {"title": "Q2095. Non-overlapping Intervals", "platform": "LeetCode", "url": "https://leetcode.com/problems/non-overlapping-intervals/", "description": "Medium | Greedy"}
  ],

  // ==================== DAY 699 — Final DSA Mastery & Contest Practice ====================
  699: [
    {"title": "Q2096. Binary Tree Maximum Path Sum", "platform": "LeetCode", "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/", "description": "Hard | Tree DP"},
    {"title": "Q2097. Serialize and Deserialize Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", "description": "Hard | Tree Design"},
    {"title": "Q2098. Lowest Common Ancestor of a Binary Tree", "platform": "LeetCode", "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", "description": "Medium | Tree"}
  ],

  // ==================== DAY 700 — Final DSA Mastery & Contest Practice ====================
  700: [
    {"title": "Q2099. Word Ladder", "platform": "LeetCode", "url": "https://leetcode.com/problems/word-ladder/", "description": "Hard | BFS"},
    {"title": "Q2100. Course Schedule II", "platform": "LeetCode", "url": "https://leetcode.com/problems/course-schedule-ii/", "description": "Medium | Topological Sort"},
    {"title": "Q2101. Accounts Merge", "platform": "LeetCode", "url": "https://leetcode.com/problems/accounts-merge/", "description": "Medium | DSU"}
  ],

  // ==================== DAY 701 — Final DSA Mastery & Contest Practice ====================
  701: [
    {"title": "Q2102. Maximum XOR of Two Numbers", "platform": "LeetCode", "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", "description": "Medium | Bitwise Trie"},
    {"title": "Q2103. Smallest Sufficient Team", "platform": "LeetCode", "url": "https://leetcode.com/problems/smallest-sufficient-team/", "description": "Hard | Bitmask DP"},
    {"title": "Q2104. Traveling Salesman Problem", "platform": "GFG", "url": "https://www.geeksforgeeks.org/problems/travelling-salesman-problem/1", "description": "Hard | Bitmask DP"}
  ],

  // ==================== DAY 702 — Final DSA Mastery & Contest Practice ====================
  702: [
    {"title": "Q2105. Codeforces 2000+ DP Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=dp", "description": "Hard | DP"},
    {"title": "Q2106. Codeforces 2000+ Graph Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=graphs", "description": "Hard | Graph"},
    {"title": "Q2107. Codeforces 2100+ Greedy Challenge", "platform": "Codeforces", "url": "https://codeforces.com/problemset?tags=greedy", "description": "Hard | Greedy"}
  ],

  // ==================== DAY 703 — Final DSA Mastery & Contest Practice ====================
  703: [
    {"title": "Q2108. Codeforces 2200+ Advanced Problem", "platform": "Codeforces", "url": "https://codeforces.com/problemset", "description": "Hard | Advanced"},
    {"title": "Q2109. LeetCode Hard Contest Problem", "platform": "LeetCode", "url": "https://leetcode.com/contest/", "description": "Hard | Contest"},
    {"title": "Q2110. Final Expert DSA Challenge", "platform": "LeetCode", "url": "https://leetcode.com/problemset/", "description": "Hard | Expert DSA"}
  ],
};




// =====================================
// SEARCH DAY
// =====================================

const searchDayInput = document.getElementById("day-search");

const searchDayButton = document.getElementById("search-day-btn");

const problemList = document.getElementById("problem-list");


function searchDay() {

    const dayNumber = Number(searchDayInput.value);

    if (
        !Number.isInteger(dayNumber) ||
        dayNumber < 1 ||
        dayNumber > 703
    ) {

        problemList.innerHTML = `
            <p class="empty-message">
                Please enter a valid day number between 1 and 703.
            </p>
        `;

        return;
    }

    displayProblems(dayNumber);

}


// =====================================
// DISPLAY QUESTIONS
// =====================================

function displayProblems(dayNumber) {

    const questions = questionsData[dayNumber];

    if (!questions) {

        problemList.innerHTML = `
            <p class="empty-message">
                Questions for Day ${dayNumber} have not been added yet.
            </p>
        `;

        return;
    }


    const savedProgress = JSON.parse(
        localStorage.getItem("dsaTrackerProgress") || "{}"
    );

    const dayProgress = savedProgress[dayNumber] || [false, false, false];


    let html = `
        <div class="day-heading">
            <h2>Day ${dayNumber}</h2>
            <p>Complete all 3 questions</p>
        </div>
    `;


    questions.forEach((question, index) => {

        const isChecked = dayProgress[index] === true;

        html += `
            <div class="question-card">

                <div class="question-checkbox">

                    <input
                        type="checkbox"
                        class="question-check"
                        data-day="${dayNumber}"
                        data-index="${index}"
                        ${isChecked ? "checked" : ""}
                    >

                </div>

                <div class="question-details">

                    <h3>${question.title}</h3>

                    <span class="platform-tag">
                        ${question.platform}
                    </span>

                    <button type="button" class="workspace-open" data-day="${dayNumber}" data-index="${index}">Open workspace <i class="fa-solid fa-arrow-right"></i></button>

                </div>

                <a
                    href="${question.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="question-link"
                >
                    Solve
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>

            </div>
        `;

    });


    problemList.innerHTML = html;


    // Attach checkbox events
    const checkboxes = problemList.querySelectorAll(".question-check");

    checkboxes.forEach(checkbox => {

        checkbox.addEventListener("change", function() {

            const day = Number(this.dataset.day);

            const index = Number(this.dataset.index);

            saveQuestionProgress(day, index, this.checked);

        });

    });

    problemList.querySelectorAll(".workspace-open").forEach(button => button.addEventListener("click", () => openProblemWorkspace(Number(button.dataset.day), Number(button.dataset.index))));

}

function openProblemWorkspace(day, index) {
    const question = questionsData[day]?.[index];
    const dialog = document.getElementById("problem-dialog");
    if (!question || !dialog) return;
    document.getElementById("workspace-title").textContent = question.title;
    document.getElementById("workspace-platform").textContent = question.platform;
    document.getElementById("workspace-description").textContent = question.description || "Practice this problem using the original platform statement. Add your own notes and solution draft below.";
    const topicHint = (question.description || "").split("|").pop().trim();
    document.getElementById("workspace-hint").textContent = topicHint && topicHint !== question.description ? `Focus on the ${topicHint} pattern. Try a small example by hand before coding.` : "Start with a brute-force approach, then look for repeated work or a useful invariant.";
    const workspaceKey = `dsaWorkspace-${day}-${index}`;
    const saved = JSON.parse(localStorage.getItem(workspaceKey) || "{}");
    document.getElementById("workspace-notes").value = saved.notes || "";
    document.getElementById("workspace-code").value = saved.code || "";
    document.getElementById("workspace-save-status").textContent = "";
    const persist = () => {
        const notes = document.getElementById("workspace-notes").value;
        const code = document.getElementById("workspace-code").value;
        localStorage.setItem(workspaceKey, JSON.stringify({ notes, code }));
        if (notes.trim() || code.trim()) {
            const attempts = JSON.parse(localStorage.getItem("dsaAttempts") || "{}");
            attempts[`${day}-${index}`] = { count: 1 };
            localStorage.setItem("dsaAttempts", JSON.stringify(attempts));
            if (typeof updateDashboardStats === "function") updateDashboardStats();
        }
        document.getElementById("workspace-save-status").textContent = "Draft saved on this device";
    };
    document.getElementById("save-workspace").onclick = persist;
    document.getElementById("mark-workspace-solved").onclick = () => {
        persist();
        saveQuestionProgress(day, index, true);
        document.getElementById("workspace-save-status").textContent = "Marked solved in your tracker";
        const input = document.querySelector(`.question-check[data-day="${day}"][data-index="${index}"]`);
        if (input) input.checked = true;
    };
    document.getElementById("close-workspace").onclick = () => dialog.close();
    dialog.showModal();
}


// =====================================
// SEARCH BUTTON EVENT
// =====================================

searchDayButton.addEventListener("click", searchDay);


// Search using Enter key
searchDayInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchDay();
    }

});
