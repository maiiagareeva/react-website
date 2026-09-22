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
  'Puring on the lake before the hurricane, Onega Lake, Karelia, Russia. July 2025',
  "Yacht on the lake, Falling lakes, Onega Lake, Karelia, Russia. July 2025",
  "Red chairs on the ground, University of Minnesota campus, September 2025",
  "Beautiful mashroom on the trail, MI, United States. September 2025",
  "Interesting tree on the lakeshore, Lake Superior, MI, United States. September 2025",
  "Lighthouse on the border with Canada, Grand Marais, North MN, United States. April 2025",
  "Kayaking on the lake, Lake Superior, MI, United States. September 2025",
  "Lakeshore, Lake Superior, MI, United States. September 2025",
  "Missisipi river view from the Hustings Park, South MN, United States. October 2025",
  'Missisipi river view from the Hustings Park, Steamboat journey, South MN, United States. October 2025',
  'Stone on the sand wiht pretty note, Lake Superior, MI, United States. September 2025',
  'Boat on the lakeshore, Lake Superior, MI, United States. September 2025',
  'Human touching freezing cold water, Lake Superior, MI, United States. September 2025',
  'Kayaking on the lake, Lake Superior, MI, United States. September 2025',
  "Woman's hand exploring pine resin, Bear Lake Park, North MN. October 2025",
  "View point of late fall, Windmills autumn landscape, Bear Lake Park, North MN. October 2025",
  "Old car with wheat plants, Hustings, South MN, United States. October 2025",

  "White metal mug above the firewood, Joy Cooke State Park, MN, United States, April 2025",
  "A dog noticed something, hiking vibes, does anybody know the dog breed? Joy Cooke State Park, MN, United States, April 2025",
  "The river flow after the winter, horizontal, Northen Minnesota, Joy Cooke State Park, MN, United States, April 2025",
  "The river flow after the winter, vertical, Northen Minnesota, Joy Cooke State Park, MN, United States, April 2025",
  "Miracle forest after the winter, fairytale view, Northen Minnesota, Joy Cooke State Park, MN, United States, April 2025",
  "Snow after the winter left on the hiking trail, Northen Minnesota, Joy Cooke State Park, MN, United States, April 2025",
  "Natural spring river flow, Northen Minnesota, Joy Cooke State Park, MN, United States, April 2025",
  "Natural spring river flow, stones and freezing water, Northen Minnesota, Joy Cooke State Park, MN, United States, April 2025",
  "A man on the stone, tourist hiker views the spring river, Northen Minnesota, Joy Cooke State Park, MN, United States, April 2025",
  "A woman on the iced land, river surface, natural danger and young passion, Northen Minnesota, Joy Cooke State Park, MN, United States, April 2025",
  "Walking through the ice and stones, Northen Minnesota, Joy Cooke State Park, MN, United States, April 2025",
  "A man steping on the ice, might have fallen in a second, a touchable moment, Northen Minnesota, Joy Cooke State Park, MN, United States, April 2025",
  "Chase your sister on the iced land, I'm following you, Northen Minnesota, Joy Cooke State Park, MN, United States, April 2025",
  "Spring waterfall, begining of the Superior Hiking Trail, MN, United States, May 2025",
  "Mysterious waterfall, water in running through the dimmed forest, Superior Hiking Trail, MN, United States, May 2025",
  "Fairytale trees, forest that makes you belive in driads, Superior Hiking Trail, MN, United States, May 2025",
  "Presence of a human in the forest, campground tent, Superior Hiking Trail, MN, United States, May 2025",
  "Water filter on the alive tree, it;s going to go, it's drinking your water, Superior Hiking Trail, MN, United States, May 2025",
  "Campground, Superior Hiking Trail, MN, United States, May 2025",
  "Jet Boil setup on the campground, contemporary camping cooking, Superior Hiking Trail, MN, United States, May 2025",
  "Random New York Street, cars on the front line, Manheton, New York, NY, United States, December 2024",
  "New York scyscrapers through the narrow dim-witted old streets, car illusion, Manheton, New York, NY, United States, December 2024",

  "Moscow Rain day, Leniskiy Prospect, August 2026",
  "Moscow Rain day, August 2026",
  "Moscow Rain day, August 2026",
  "Moscow Rain day, August 2026",
  "Moscow Rain day, August 2026",
  "Moscow Rain day, August 2026",
  "Moscow Rain day, August 2026",
  "Moscow Rain day, August 2026",
  "Moscow Rain day, August 2026",
  "Moscow Rain day, August 2026",
  "Moscow Rain day, August 2026",
  "Moscow Rain day, August 2026",
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
