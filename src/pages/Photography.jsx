import React, { useEffect, useState } from "react";

function getIndex(path) {
  const match = path.match(/photo(\d+)\.jpg$/);
  return match ? Number(match[1]) : 0;
}


const fullFiles = import.meta.glob('/public/images/full/photo*.jpg', { eager: true, import: 'default' });
const thumbFiles = import.meta.glob('/public/images/thumbs/photo*.jpg', { eager: true, import: 'default' });

let photosFull = Object.keys(fullFiles).map((p) => p.replace('/public', ''));
let photosThumb = Object.keys(thumbFiles).map((p) => p.replace('/public', ''));

photosFull.sort((a, b) => getIndex(a) - getIndex(b));
photosThumb.sort((a, b) => getIndex(a) - getIndex(b));
// last added in the beginning
photosFull.reverse();
photosThumb.reverse();

const captions = [
  'Puring on the lake, before the hurricane, Onega Lake, Karelia, Russia. July 2025',
  'Missisipi river view from the Hustings Park, South MN, United States. October 2025',
  'Stone on the sand wiht pretty note, Lake Superior, MI, United States. September 2025',
  'Boat on the lakeshore, Lake Superior, MI, United States. September 2025',
  'Human touching freezing cold water, Lake Superior, MI, United States. September 2025',
  'Kayaking on the lake, Lake Superior, MI, United States. September 2025',
  "Woman's hand exploring pine resin, Bear Lake Park, North MN. October 2025",
  "View point of late fall, Bear Lake Park, North MN. October 2025",
  "Old car with wheat plants, Hustings, South MN, United States. October 2025",
  "Yacht on the lake, Falling lakes, Onega Lake, Karelia, Russia. July 2025",
  "Red chairs on the ground, University of Minnesota campus, September 2025",
  "Beautiful mashroom on the trail, MI, United States. September 2025",
  "Interesting tree on the lakeshore, Lake Superior, MI, United States. September 2025",
  "Lighthouse on the border with Canada, Grand Marais, North MN, United States. April 2025",
  "Kayaking on the lake, Lake Superior, MI, United States. September 2025",
  "Lakeshore, Lake Superior, MI, United States. September 2025",
  "Missisipi river view from the Hustings Park, South MN, United States. October 2025",
  "18. Captions currently under deploy","19. Captions currently under deploy","20. Captions currently under deploy","21. Captions currently under deploy","22. Captions currently under deploy","23. Captions currently under deploy","24. Captions currently under deploy","25. Captions currently under deploy","26. Captions currently under deploy","27. Captions currently under deploy","28. Captions currently under deploy","29. Captions currently under deploy","30. Captions currently under deploy","31. Captions currently under deploy","32. Captions currently under deploy","33. Captions currently under deploy","34. Captions currently under deploy","35. Captions currently under deploy","36. Captions currently under deploy","37. Captions currently under deploy","38. Captions currently under deploy","39. Captions currently under deploy"
];

captions.reverse();



export default function Photography(){
  const [isOpen,setOpen] = useState(false);
  const [index,setIndex] = useState(0);
  const open = (i)=>{ setIndex(i); setOpen(true); };
  const close = ()=> setOpen(false);
  const prev = ()=> setIndex(i=>(i-1+photosFull.length)%photosFull.length);
  const next = ()=> setIndex(i=>(i+1)%photosFull.length);
  // keyboard
  useEffect(()=>{
    if(!isOpen) return;
    const onKey = (e)=>{
      if(e.key==='Escape') close();
      if(e.key==='ArrowLeft') prev();
      if(e.key==='ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  },[isOpen]);

  return (
    <>
      <main className="container section">
        <h2 className="title">
          PHOTOGRAPHY
          <span className="info-icon" title="">
            ?
            <span className="info-popup">
              All photographs were taken personally by Maiia Gareeva.
              <br/>
              © 
              <br/>
              [Nikon Z30][Sony alpha6400][Canon Rebel DSLR]
            </span>
          </span>
        </h2>
        <div className="photo-grid">
          {photosThumb.map((src,i)=>(
            <img className="photo" key={i} src={src} alt={`photo ${i+1}`} onClick={()=>open(i)} />
          ))}
        </div>
      </main>

      {isOpen && (
        <div className="lightbox" onClick={close}>
          <button className="lb-btn left" onClick={(e)=>{e.stopPropagation(); prev();}} aria-label="Previous">‹</button>
          <img className="lb-image" src={photosFull[index]} alt="large" onClick={(e)=>e.stopPropagation()} />
          <p className="lb-caption">{captions[index]}</p>
          <button className="lb-btn right" onClick={(e)=>{e.stopPropagation(); next();}} aria-label="Next">›</button>
          <button className="lb-close" onClick={(e)=>{e.stopPropagation(); close();}} aria-label="Close">×</button>
        </div>
      )}
    </>
  );
}
