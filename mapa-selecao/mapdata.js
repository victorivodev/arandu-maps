var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "",
    state_color: "#88A4BC",
    state_hover_color: "#aaaaaa",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "yes",
    all_states_zoomable: "no",
    location_description: "",
    location_url: "",
    location_color: "#f69e25",
    location_opacity: "0.85",
    location_hover_opacity: 1,
    location_size: "12",
    location_type: "circle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "no",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    BRAC: {
      name: "Acre",
      color: "#289b83",
      inactive: "no",
      url: "javascript:abrirPopup('popup-ac')"
    },
    BRAL: {
      name: "Alagoas",
      color: "#96d8ca"
    },
    BRAM: {
      name: "Amazonas",
      color: "#289b83",
      inactive: "no",
      url: "javascript:abrirPopup('popup-am')"
    },
    BRAP: {
      name: "Amapá",
      color: "#96d8ca"
    },
    BRBA: {
      name: "Bahia",
      color: "#96d8ca"
    },
    BRCE: {
      name: "Ceará",
      color: "#289b83",
      inactive: "no",
      url: "javascript:abrirPopup('popup-ce')"
    },
    BRDF: {
      name: "Distrito Federal",
      color: "#2db195"
    },
    BRES: {
      name: "Espírito Santo",
      color: "#96d8ca"
    },
    BRGO: {
      name: "Goiás",
      color: "#2db195"
    },
    BRMA: {
      name: "Maranhão",
      color: "#96d8ca"
    },
    BRMG: {
      name: "Minas Gerais",
      color: "#2db195"
    },
    BRMS: {
      name: "Mato Grosso do Sul",
      color: "#96d8ca"
    },
    BRMT: {
      name: "Mato Grosso",
      color: "#289b83",
      inactive: "no",
      url: "javascript:abrirPopup('popup-mt')"
    },
    BRPA: {
      name: "Pará",
      color: "#2db195"
    },
    BRPB: {
      name: "Paraíba",
      color: "#289b83",
      inactive: "no",
      url: "javascript:abrirPopup('popup-pb')"
    },
    BRPE: {
      name: "Pernambuco",
      color: "#289b83",
      inactive: "no",
      url: "javascript:abrirPopup('popup-pe')"
    },
    BRPI: {
      name: "Piauí",
      color: "#289b83",
      inactive: "no",
      url: "javascript:abrirPopup('popup-pi')"
    },
    BRPR: {
      name: "Paraná",
      color: "#289b83",
      inactive: "no",
      url: "javascript:abrirPopup('popup-pr')"
    },
    BRRJ: {
      name: "Rio de Janeiro",
      color: "#289b83",
      inactive: "no",
      url: "javascript:abrirPopup('popup-rj')"
    },
    BRRN: {
      name: "Rio Grande do Norte",
      color: "#2db195"
    },
    BRRO: {
      name: "Rondônia",
      color: "#96d8ca"
    },
    BRRR: {
      name: "Roraima",
      color: "#2db195"
    },
    BRRS: {
      name: "Rio Grande do Sul",
      color: "#2db195"
    },
    BRSC: {
      name: "Santa Catarina",
      color: "#2db195"
    },
    BRSE: {
      name: "Sergipe",
      color: "#289b83",
      inactive: "no",
      url: "javascript:abrirPopup('popup-se')"
    },
    BRSP: {
      name: "São Paulo",
      color: "#289b83",
      inactive: "no",
      url: "javascript:abrirPopup('popup-sp')"
    },
    BRTO: {
      name: "Tocantins",
      color: "#2db195"
    }
  },
  locations: {
    "0": {
      lat: "-27.593500",
      lng: "-48.558540",
      color: "#e2e47b",
      name: "Florianópolis"
    },
    "1": {
      lat: "-25.441105",
      lng: "-49.276855",
      color: "#e2e47b",
      name: "Curitiba"
    },
    "2": {
      lat: "-22.908333",
      lng: "-43.196388",
      color: "#e2e47b",
      name: "Rio de Janeiro"
    },
    "3": {
      lat: "-5.089166",
      lng: "-42.801944",
      color: "#e2e47b",
      name: "Teresina"
    },
    "4": {
      lat: "-3.68274",
      lng: "-40.3512",
      color: "#e2e47b",
      name: "Floriano"
    },
    "5": {
      lat: "-7.11532",
      lng: "-34.861",
      color: "#e2e47b",
      name: "Recife"
    },
    "6": {
      lat: "-8.28455",
      lng: "-35.96994",
      color: "#e2e47b",
      name: "Caruaru"
    },
    "7": {
      lat: "-9.974723",
      lng: "-67.81",
      color: "#f69e25",
      name: "Rio Branco"
    },
    "8": {
      lat: "-3.101944",
      lng: "-60.025",
      color: "#f69e25",
      name: "Manaus"
    },
    "9": {
      lat: "-15.598889",
      lng: "-56.084722",
      color: "#f69e25",
      name: "Cuiabá"
    },
    "10": {
      lat: "-23.550278",
      lng: "-46.633889",
      color: "#f69e25",
      name: "São Paulo"
    },
    "11": {
      lat: "-10.908333",
      lng: "-37.079444",
      color: "#f69e25",
      name: "Aracaju"
    },
    "12": {
      lat: "-23.31",
      lng: "-51.162778",
      color: "#f69e25",
      name: "Londrina"
    },
    "13": {
      lat: "-7.207222",
      lng: "-39.313889",
      color: "#f69e25",
      name: "Juazeiro do Norte"
    },
    "14": {
      lat: "-7.219723",
      lng: "-35.875278",
      color: "#f69e25",
      name: "Campina Grande"
    }
  },
  labels: {
    BRAC: {
      name: "Acre",
      parent_id: "BRAC"
    },
    BRAL: {
      name: "Alagoas",
      parent_id: "BRAL"
    },
    BRAM: {
      name: "Amazonas",
      parent_id: "BRAM"
    },
    BRAP: {
      name: "Amapá",
      parent_id: "BRAP"
    },
    BRBA: {
      name: "Bahia",
      parent_id: "BRBA"
    },
    BRCE: {
      name: "Ceará",
      parent_id: "BRCE"
    },
    BRDF: {
      name: "Distrito Federal",
      parent_id: "BRDF"
    },
    BRES: {
      name: "Espírito Santo",
      parent_id: "BRES"
    },
    BRGO: {
      name: "Goiás",
      parent_id: "BRGO"
    },
    BRMA: {
      name: "Maranhão",
      parent_id: "BRMA"
    },
    BRMG: {
      name: "Minas Gerais",
      parent_id: "BRMG"
    },
    BRMS: {
      name: "Mato Grosso do Sul",
      parent_id: "BRMS"
    },
    BRMT: {
      name: "Mato Grosso",
      parent_id: "BRMT"
    },
    BRPA: {
      name: "Pará",
      parent_id: "BRPA"
    },
    BRPB: {
      name: "Paraíba",
      parent_id: "BRPB"
    },
    BRPE: {
      name: "Pernambuco",
      parent_id: "BRPE"
    },
    BRPI: {
      name: "Piauí",
      parent_id: "BRPI"
    },
    BRPR: {
      name: "Paraná",
      parent_id: "BRPR"
    },
    BRRJ: {
      name: "Rio de Janeiro",
      parent_id: "BRRJ"
    },
    BRRN: {
      name: "Rio Grande do Norte",
      parent_id: "BRRN"
    },
    BRRO: {
      name: "Rondônia",
      parent_id: "BRRO"
    },
    BRRR: {
      name: "Roraima",
      parent_id: "BRRR"
    },
    BRRS: {
      name: "Rio Grande do Sul",
      parent_id: "BRRS"
    },
    BRSC: {
      name: "Santa Catarina",
      parent_id: "BRSC"
    },
    BRSE: {
      name: "Sergipe",
      parent_id: "BRSE"
    },
    BRSP: {
      name: "São Paulo",
      parent_id: "BRSP"
    },
    BRTO: {
      name: "Tocantins",
      parent_id: "BRTO"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};