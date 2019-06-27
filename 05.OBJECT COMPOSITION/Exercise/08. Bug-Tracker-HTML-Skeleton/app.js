function solve() {
    let id = 0;
    const reports = [];
    let selector = '';

    function displayReports() {
        const parent = document.querySelector(selector);
        parent.innerHTML = '';
        [...reports].forEach(r => {
            parent.innerHTML += `<div id="report_${r.ID}" class="report">
            <div class="body">
              <p>${r.description}</p>
            </div>
            <div class="title">
              <span class="author">Submitted by: ${r.author}</span>
              <span class="status">${r.status} | ${r.severity}</span>
            </div>
          </div>`;
        })
    }

    return {
        report(author, description, reproducible, severity) {
            const ID = id++;
            const status = 'Open';
            const newReport = {
                ID,
                author,
                description,
                reproducible,
                severity,
                status
            };
            reports.push(newReport);
            displayReports();
        },

        setStatus(id, newStatus) {
            const report = reports.find(r => r.ID === id);
            if (report) {
                report.status = newStatus;
            }
            displayReports();
        },

        remove(id) {
            const report = reports.find(r => r.ID === id);
            if (report) {
                const reportIndex = reports.indexOf(report);
                reports.splice(reportIndex, 1);
            }
            displayReports();
        },

        sort(method) {
            if (method === 'author') {
                reports.sort((a, b) => a[method].localeCompare(b[method]))
            } else {
                reports.sort((a, b) => a[method] - b[method]);
            }
            displayReports();
        },

        output(newSelector) {
            selector = newSelector;
        }
    }
}
