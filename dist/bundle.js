document.addEventListener("DOMContentLoaded",(function(){const t=L.map("map").setView([0,0],2);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(t);const e=L.icon({iconUrl:"../src/img/target.png",iconSize:[52,52],iconAnchor:[25,10]}),n=L.marker([0,0],{icon:e}).addTo(t),o=L.circle([0,0],22e5,{color:"#fff",opacity:.5,weight:1,fillColor:"#fff",fillOpacity:.1}).addTo(t);function a(){$.getJSON("http://api.open-notify.org/iss-now.json?callback=?",(function(e){var a=e.iss_position.latitude,i=e.iss_position.longitude;n.setLatLng([a,i]),o.setLatLng([a,i]),t.panTo([a,i],animate=!0)}))}a(),setInterval(a,5e3),async function(){try{const t="fMdmZpcEkytfbkoX5V9xsHXjLCFHe9GzB5EExUTc",e=await fetch(`https://api.nasa.gov/planetary/apod?api_key=${t}`),n=await e.json();document.getElementById("apod-container").innerHTML=`\n            <img src="${n.url}" alt="Astronomy Picture of the Day">\n            <h3>${n.title}</h3>\n            <p>${n.explanation}</p>\n        `}catch(t){console.error("Error fetching APOD data:",t)}}(),async function(){try{const t="fMdmZpcEkytfbkoX5V9xsHXjLCFHe9GzB5EExUTc",e=await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${t}`),n=await e.json(),o=document.getElementById("asteroids-container");o.innerHTML="<h3>Near-Earth Asteroids</h3>";const a=6;for(let t=0;t<a;t++){const e=n.near_earth_objects[t];if(e){const t=document.createElement("div");t.classList.add("neo"),t.innerHTML=`\n                    <h3>${e.name}</h3>\n                    <p>Diameter: ${e.estimated_diameter.kilometers.estimated_diameter_max} km</p>\n                    \x3c!-- Add more NEO details as needed --\x3e\n                `,o.appendChild(t)}}}catch(t){console.error("Error fetching Asteroids data:",t)}}(),document.getElementById("astronauts-button").addEventListener("click",(async function(){try{const t=await fetch("http://api.open-notify.org/astros.json"),e=await t.json(),n=document.getElementById("astronauts-list");n.innerHTML="<h3>Astronauts in Space</h3><ul>",e.people.forEach((t=>{n.innerHTML+=`<li>${t.name} (${t.craft})</li>`})),n.innerHTML+="</ul>"}catch(t){console.error("Error fetching astronauts:",t)}})),async function(){try{const t=await fetch("https://api.spacexdata.com/v3/missions"),e=await t.json(),n=document.getElementById("missions-container");e.slice(0,4).forEach((t=>{const e=document.createElement("div");e.classList.add("mission"),e.innerHTML=`\n                <h3>${t.mission_name}</h3>\n                <p>${t.description}</p>\n            `,n.appendChild(e)}))}catch(t){console.error("Error fetching SpaceX missions:",t)}}(),async function(){try{const t=await fetch("https://api.spacexdata.com/v3/history"),e=await t.json(),n=document.getElementById("history-container");e.slice(0,4).forEach((t=>{const e=document.createElement("div");e.classList.add("history"),e.innerHTML=`\n                <h3>${t.title}</h3>\n                <p>${t.details}</p>\n            `,n.appendChild(e)}))}catch(t){console.error("Error fetching SpaceX history:",t)}}();const i=document.getElementById("button_one"),s=document.getElementById("button_two"),c=document.getElementById("button_three"),d=document.getElementById("button_four"),r=document.getElementById("button_five"),l=document.getElementById("button_six"),m=document.getElementById("about"),y=document.getElementById("brutalism"),p=document.getElementById("contact"),u=document.getElementById("iss-location"),h=document.getElementById("apod"),E=document.getElementById("astronauts"),f=document.getElementById("asteroids"),g=document.getElementById("missions-container"),B=document.getElementById("history-container"),I=document.getElementById("About_section"),v=document.getElementById("Brutalism_section"),k=document.getElementById("Contact_section");function _(t){"none"===t.style.display?t.style.display="block":t.style.display="none"}u.style.display="none",h.style.display="none",E.style.display="none",f.style.display="none",g.style.display="none",B.style.display="none",I.style.display="none",v.style.display="none",k.style.display="none",i.addEventListener("click",(()=>{_(u)})),s.addEventListener("click",(()=>{_(h)})),c.addEventListener("click",(()=>{_(E)})),d.addEventListener("click",(()=>{_(f)})),r.addEventListener("click",(()=>{_(g)})),l.addEventListener("click",(()=>{_(B)})),m.addEventListener("click",(()=>{_(I)})),y.addEventListener("click",(()=>{_(v)})),p.addEventListener("click",(()=>{_(k)}));const b=document.getElementById("space-info");!async function(){try{const t=await fetch("http://api.open-notify.org/astros.json"),e=(await t.json()).number;b.textContent=`Currently, there are ${e} humans in space.`}catch(t){b.textContent="Error fetching data.",console.error("Error fetching data:",t)}}()}));