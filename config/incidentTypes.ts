const carCrashGif = "/images/car-crash.gif";
const fireGif = "/images/fire.gif";
const medicineGif = "/images/medicine.gif";
const gunGif = "/images/gun.gif";
const protestersGif = "/images/protesters.gif";
const knifeGif = "/images/knife.gif";
const fightGif = "/images/fight.gif";

export const INCIDENT_TYPES = {
    accident: { label: "Car Crash", background: "#ff6255", gif: carCrashGif },
    fire: { label: "Fire", background: "#ff914d", gif: fireGif },
    medical: { label: "Medical", background: "#5bb6f8", gif: medicineGif },
    gun: { label: "Gun", background: "#7d58ff", gif: gunGif },
    protest: { label: "Protest", background: "#29d884", gif: protestersGif },
    knife: { label: "Knife", background: "#7d58ff", gif: knifeGif },
    fight: { label: "Fight", background: "#29d884", gif: fightGif },
};

export const DEFAULT_CENTER = { lat: 22.491955, lng: 88.40151 };
export const DEFAULT_ZOOM = 12;
export const DEFAULT_MAP_ID = "971b64631c188c633ab97cf3";
