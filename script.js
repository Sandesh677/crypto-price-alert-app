function checkPrice() {
    const coin = document.getElementById('coin').value.toLowerCase();
    const target = parseFloat(document.getElementById('target').value);
    fetch(`http://localhost:3000/api/price/${coin}`)
        .then(res => res.json())
        .then(data => {
            const current = data[coin]?.usd;
            if (!current) return alert("Invalid coin!");
            if (current >= target) {
                alert(`Target reached! ${coin} is now $${current}`);
            } else {
                document.getElementById('status').innerText = `${coin} is at $${current}, waiting for $${target}`;
            }
        });
}
