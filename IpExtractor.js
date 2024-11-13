var ipElements = document.querySelectorAll("strong");
var ips = [];
ipElements.forEach(function (e) {
    ips.push(e.innerHTML.replace(/["']/g, ""));
});
var ipsString = ips.join("\n");
var a = document.createElement("a");
a.href = "data:text/plain;charset=utf-8," + encodeURIComponent(ipsString);
a.download = "Allips.txt";
document.body.appendChild(a);
a.click();
