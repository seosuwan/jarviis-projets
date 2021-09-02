import React, { useCallback, useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: 37, lng: 127 },
      zoom: 8,
    });
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  return (
    <div
    
      className="map"
      style={{ width: "1000px", height: "400px", margin: '0 auto' }}
      ref={mapRef}
   
    ></div>
  );
}


export default Map;