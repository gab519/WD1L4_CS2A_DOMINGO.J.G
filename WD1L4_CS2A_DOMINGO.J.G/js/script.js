// Builds and shows the Grade Equivalents table
function showGradeEquivalent() {

    // Arrays for names and grades 
    let studentNames = ["Anna Reyes", "Ben Santos", "Carla Cruz", "David Lim", "Ella Ramos"];
    let studentGrades = [92, 85, 78, 97, 74];

    // Table heading and header row
    let output = "<h2>Grade Equivalents</h2>";
    output += "<table>";
    output += "<tr>";
    output += "<th>Student Name</th>";
    output += "<th>Grade</th>";
    output += "<th>Equivalent</th>";
    output += "<th>Remark</th>";
    output += "<th>Academic Leader</th>";
    output += "</tr>";

    // Loop through every student
    for (let i = 0; i < studentNames.length; i++) {

        let name = studentNames[i];
        let grade = studentGrades[i];

        let equivalent = getEquivalent(grade);       // grade equivalent
        let remark = getRemark(grade);               // passed or failed
        let leader = getAcademicLeader(equivalent);  // leader class

        // One row per student
        output += "<tr>";
        output += "<td>" + name + "</td>";
        output += "<td>" + grade + "</td>";
        output += "<td>" + equivalent + "</td>";
        output += "<td>" + remark + "</td>";
        output += "<td>" + leader + "</td>";
        output += "</tr>";
    }

    output += "</table>";

    // Show the table on the page
    document.getElementById("result").innerHTML = output;
}

// Returns "Passed" for 75 and above, else "Failed"
function getRemark(grade) {
    let remark = (grade >= 75) ? "Passed" : "Failed";
    return remark;
}

// Converts a grade to its equivalent
function getEquivalent(grade) {
    let equivalent = "";

    if (grade >= 97) { equivalent = "1.0"; }
    else if (grade >= 94) { equivalent = "1.25"; }
    else if (grade >= 91) { equivalent = "1.5"; }
    else if (grade >= 88) { equivalent = "1.75"; }
    else if (grade >= 85) { equivalent = "2.0"; }
    else if (grade >= 82) { equivalent = "2.25"; }
    else if (grade >= 79) { equivalent = "2.5"; }
    else if (grade >= 76) { equivalent = "2.75"; }
    else if (grade >= 75) { equivalent = "3.0"; }
    else { equivalent = "Failed"; }

    return equivalent;
}

// Gets the Academic Leader class from the equivalent
function getAcademicLeader(equivalent) {
    let leader = "";

    switch (equivalent) {
        case "1.0":
        case "1.25":
            leader = "1st Class Academic Leader";
            break;
        case "1.5":
            leader = "2nd Class Academic Leader";
            break;
        case "1.75":
            leader = "3rd Class Academic Leader";
            break;
        default:
            leader = "-";  // not a leader
            break;
    }

    return leader;
}