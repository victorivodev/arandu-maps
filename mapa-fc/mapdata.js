var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "",
    state_color: "#96d8ca",
    state_hover_color: "#aaaaaa",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "yes",
    all_states_zoomable: "no",
    location_description: "",
    location_url: "",
    location_color: "#289b83",
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
      name: "Acre"
    },
    BRAL: {
      name: "Alagoas"
    },
    BRAM: {
      name: "Amazonas"
    },
    BRAP: {
      name: "Amapá"
    },
    BRBA: {
      name: "Bahia"
    },
    BRCE: {
      name: "Ceará",
      inactive: "no",
      color: "#78b2a5",
      url: "javascript:abrirPopup('popup-ce')"
    },
    BRDF: {
      name: "Distrito Federal"
    },
    BRES: {
      name: "Espírito Santo",
      inactive: "no",
      color: "#78b2a5",
      url: "javascript:abrirPopup('popup-es')"
    },
    BRGO: {
      name: "Goiás"
    },
    BRMA: {
      name: "Maranhão"
    },
    BRMG: {
      name: "Minas Gerais"
    },
    BRMS: {
      name: "Mato Grosso do Sul"
    },
    BRMT: {
      name: "Mato Grosso"
    },
    BRPA: {
      name: "Pará"
    },
    BRPB: {
      name: "Paraíba"
    },
    BRPE: {
      name: "Pernambuco"
    },
    BRPI: {
      name: "Piauí"
    },
    BRPR: {
      name: "Paraná",
      inactive: "no",
      color: "#78b2a5",
      url: "javascript:abrirPopup('popup-pr')"
    },
    BRRJ: {
      name: "Rio de Janeiro"
    },
    BRRN: {
      name: "Rio Grande do Norte"
    },
    BRRO: {
      name: "Rondônia"
    },
    BRRR: {
      name: "Roraima"
    },
    BRRS: {
      name: "Rio Grande do Sul"
    },
    BRSC: {
      name: "Santa Catarina",
      inactive: "no",
      color: "#78b2a5",
      url: "javascript:abrirPopup('popup-sc')"
    },
    BRSE: {
      name: "Sergipe"
    },
    BRSP: {
      name: "São Paulo"
    },
    BRTO: {
      name: "Tocantins"
    }
  },
  locations: {
    "0": {
      name: "Vitória",
      lat: "-20.3155",
      lng: "-40.3128",
      color: "#405159"
    },
    "1": {
      lat: "-26.3044",
      lng: "-48.8487",
      name: "Joinville",
      color: "#e2e47b"
    },
    "2": {
      name: "Sobral",
      lat: "-3.6894",
      lng: "-40.3482",
      color: "#e2e47b"
    },
    "3": {
      name: "Curitiba",
      lat: "-25.4284",
      lng: "-49.2733",
      color: "#e2e47b"
    },
    "4": {
      name: "Blumenau",
      lat: "-26.9156",
      lng: "-49.0706",
      color: "#405159"
    },
    "5": {
      name: "Maringá",
      lat: "-23.4205",
      lng: "-51.9331",
      color: "#405159"
    },
    "6": {
      name: "Parnaíba",
      lat: "-2.9057",
      lng: "-41.7754",
      color: "#405159"
    },
    "7": {
      name: "Porto Alegre",
      lat: "-30.033056",
      lng: "-51.23",
      color: "#e2e47b"
    },
    "8": {
      name: "AC",
      lat: "-9.97499",
      lng: "-67.8243"
    },
    "9": {
      name: "AL",
      lat: "-9.5713",
      lng: "-36.7820"
    },
    "10": {
      name: "AM",
      lat: "-3.4168",
      lng: "-65.8561"
    },
    "11": {
      name: "AP",
      lat: "1.5708",
      lng: "-51.7700"
    },
    "12": {
      name: "BA",
      lat: "-12.5797",
      lng: "-41.7007"
    },
    "13": {
      name: "CE",
      lat: "-5.4984",
      lng: "-39.3206"
    },
    "14": {
      name: "DF",
      lat: "-15.7998",
      lng: "-47.8645"
    },
    "15": {
      name: "ES",
      lat: "-19.1834",
      lng: "-40.3089"
    },
    "16": {
      name: "GO",
      lat: "-15.8270",
      lng: "-49.8362"
    },
    "17": {
      name: "MA",
      lng: "-45.2744",
      lat: "-4.9609"
    },
    "18": {
      name: "MG",
      lat: "-18.5122",
      lng: "-44.5550"
    },
    "19": {
      name: "MT",
      lat: "-12.6819",
      lng: "-55.5870"
    },
    "20": {
      name: "MS",
      lat: "-20.7722",
      lng: "-54.7852"
    },
    "21": {
      name: "PA",
      lat: "-3.9736",
      lng: "-52.2509"
    },
    "22": {
      name: "PB",
      lat: "-7.2399",
      lng: "-36.7819"
    },
    "23": {
      name: "PE",
      lat: "-8.8137",
      lng: "-36.9541"
    },
    "24": {
      name: "PI",
      lat: "-7.7183",
      lng: "-42.7289"
    },
    "25": {
      name: "PR",
      lat: "-24.4842",
      lng: "-51.8149"
    },
    "26": {
      name: "RJ",
      lat: "-22.2496",
      lng: "-42.1960"
    },
    "27": {
      name: "RN",
      lat: "-5.4026",
      lng: "-36.9541"
    },
    "28": {
      name: "RO",
      lat: "-10.8300",
      lng: "-63.3352"
    },
    "29": {
      name: "RR",
      lat: "2.7376",
      lng: "-62.0751"
    },
    "30": {
      name: "RS",
      lat: "-29.8406",
      lng: "-53.5020"
    },
    "31": {
      name: "SC",
      lat: "-27.2423",
      lng: "-50.2189"
    },
    "32": {
      name: "SE",
      lat: "-10.5741",
      lng: "-37.3857"
    },
    "33": {
      name: "SP",
      lat: "-22.1868",
      lng: "-48.7946"
    },
    "34": {
      name: "TO",
      lat: "-10.1753",
      lng: "-48.2982"
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