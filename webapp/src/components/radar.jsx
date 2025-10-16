import { useRef } from "react";
import Player from "./player";
import Bomb from "./bomb";

const Radar = ({
  playerArray,
  radarImage,
  mapData,
  localTeam,
  averageLatency,
  bombData,
  settings,
  isMobile = false
}) => {
  const radarImageRef = useRef();

  return (
    <div id="radar" className={`relative overflow-hidden origin-center ${isMobile ? 'max-w-sm max-h-sm' : ''}`}>
      <img ref={radarImageRef} className={`w-full h-auto ${isMobile ? 'max-w-full max-h-full object-contain' : ''}`} src={radarImage} />

      {playerArray.map((player) => (
        <Player
          key={player.m_idx}
          playerData={player}
          mapData={mapData}
          radarImage={radarImageRef.current}
          localTeam={localTeam}
          averageLatency={averageLatency}
          settings={settings}
        />
      ))}

      {bombData && (
        <Bomb
          bombData={bombData}
          mapData={mapData}
          radarImage={radarImageRef.current}
          localTeam={localTeam}
          averageLatency={averageLatency}
          settings={settings}
        />
      )}
    </div>
  );
};

export default Radar;