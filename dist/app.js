'use strict';
const platform=(()=>{const p=navigator.userAgentData?.platform||navigator.platform||navigator.userAgent;return /Mac/i.test(p)?'macos':/Win/i.test(p)?'windows':/Linux/i.test(p)?'linux':null;})();
if(platform){document.querySelector(`[data-platform="${platform}"]`)?.classList.add('recommended');document.querySelector('#main-download').firstChild.textContent=platform==='macos'?'Downloads for Mac ':platform==='windows'?'Downloads for Windows ':'Downloads for Linux ';}
fetch('releases.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('unavailable');return r.json();}).then(data=>{
  if(typeof data.note==='string')document.querySelector('#release-note').textContent=data.note;
  const targets={macos:'mac-downloads',windows:'windows-downloads',linux:'linux-downloads'};
  for(const os of Object.keys(targets)){
    const releases=(data.downloads||[]).filter(r=>r.os===os&&r.status==='available'&&r.tested===true&&r.signing_verified===true&&/^https:\/\/github\.com\/noordenbos\/block-archive\/releases\/download\//.test(r.url||'')&&/^[a-f0-9]{64}$/.test(r.sha256||''));
    if(!releases.length)continue;
    const container=document.getElementById(targets[os]);container.replaceChildren();
    for(const release of releases){const a=document.createElement('a');a.className='button primary';a.href=release.url;a.textContent=release.label+' ↓';container.append(a);const details=document.createElement('details');details.className='download-meta';const summary=document.createElement('summary');summary.textContent='Version '+release.version+' · SHA-256';const code=document.createElement('code');code.textContent=release.sha256;details.append(summary,code);container.append(details);}
  }
}).catch(()=>{});
