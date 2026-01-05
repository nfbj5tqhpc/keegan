function openTab(tabId) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    document.querySelector(`[onclick="openTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function showQR() {
    document.getElementById('qrModal').style.display = 'flex';

    const canvas = document.getElementById('qrCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 200;
    canvas.height = 200;

    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,200,200);

    ctx.fillStyle = "#000";
    for (let i = 0; i < 200; i += 10) {
        for (let j = 0; j < 200; j += 10) {
            if (Math.random() > 0.5) {
                ctx.fillRect(i, j, 8, 8);
            }
        }
    }

    document.getElementById('randomCode').innerText =
        'ID: ' + Math.floor(100000000 + Math.random() * 900000000);
}

function closeQR() {
    document.getElementById('qrModal').style.display = 'none';
}