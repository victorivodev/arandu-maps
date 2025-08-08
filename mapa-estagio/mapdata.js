var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "no",
    location_description: "",
    location_url: "",
    location_color: "#FF0067",
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
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRAL: {
      name: "Alagoas",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRAM: {
      name: "Amazonas",
      color: "#96d8ca",
      hover_color: "#484d50",
      inactive: "yes"
    },
    BRAP: {
      name: "Amapá",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRBA: {
      name: "Bahia",
      color: "#2db195",
      hover_color: "#484d50",
      inactive: "yes"
    },
    BRCE: {
      name: "Ceará",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRDF: {
      name: "Distrito Federal",
      color: "#2db195",
      hover_color: "#484d50",
      url: "javascript:abrirPopup('popup-df')"
    },
    BRES: {
      name: "Espírito Santo",
      color: "#96d8ca",
      hover_color: "#484d50",
      inactive: "yes"
    },
    BRGO: {
      name: "Goiás",
      color: "#2db195",
      hover_color: "#484d50",
      url: "javascript:abrirPopup('popup-go')"
    },
    BRMA: {
      name: "Maranhão",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRMG: {
      name: "Minas Gerais",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRMS: {
      name: "Mato Grosso do Sul",
      color: "#2db195",
      hover_color: "#484d50",
      url: "javascript:abrirPopup('popup-ms')"
    },
    BRMT: {
      name: "Mato Grosso",
      color: "#2db195",
      hover_color: "#484d50",
      url: "javascript:abrirPopup('popup-mt')"
    },
    BRPA: {
      name: "Pará",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRPB: {
      name: "Paraíba",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRPE: {
      name: "Pernambuco",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRPI: {
      name: "Piauí",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRPR: {
      name: "Paraná",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRRJ: {
      name: "Rio de Janeiro",
      color: "#96d8ca",
      hover_color: "#484d50",
      inactive: "yes"
    },
    BRRN: {
      name: "Rio Grande do Norte",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRRO: {
      name: "Rondônia",
      color: "#96d8ca",
      hover_color: "#484d50",
      inactive: "yes"
    },
    BRRR: {
      name: "Roraima",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRRS: {
      name: "Rio Grande do Sul",
      color: "#2db195",
      hover_color: "#484d50",
      url: "javascript:abrirPopup('popup-rs')"
    },
    BRSC: {
      name: "Santa Catarina",
      color: "#96d8ca",
      hover_color: "#484d50",
      inactive: "yes"
    },
    BRSE: {
      name: "Sergipe",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRSP: {
      name: "São Paulo",
      color: "#2db195",
      hover_color: "#484d50"
    },
    BRTO: {
      name: "Tocantins",
      color: "#2db195",
      hover_color: "#484d50"
    }
  },
  locations: {
    "0": {
      lat: "-15.793889",
      lng: "-47.882778",
      color: "#f69e25",
      name: "Distrito Federal"
    },
    "1": {
      lat: "-16.672222",
      lng: "-49.253889",
      color: "#f69e25",
      name: "Goiânia"
    },
    "2": {
      lat: "-15.598889",
      lng: "-56.084722",
      color: "#f69e25",
      name: "Cuiabá"
    },
    "3": {
      lat: "-23.550278",
      lng: "-46.633889",
      color: "#f69e25",
      name: "São Paulo"
    },
    "4": {
      lat: "-20.442777",
      lng: "-54.646389",
      color: "#f69e25",
      name: "Campo Grande"
    },
    "5": {
      lat: "-30.033056",
      lng: "-51.23",
      color: "#f69e25",
      name: "Porto Alegre"
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