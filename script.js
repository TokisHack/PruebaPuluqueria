// script.js
let currentIndex = 0;

function showServiceInfo(serviceName) {
    let serviceInfoText;
    switch(serviceName) {
        case 'Corte Clásico':
            serviceInfoText = 'El Corte Clásico es un estilo atemporal que ofrece un look elegante y pulido.';
            break;
        case 'Corte Moderno':
            serviceInfoText = 'El Corte Moderno combina técnicas avanzadas para un look contemporáneo y único.';
            break;
        case 'Corte Creativo':
            serviceInfoText = 'El Corte Creativo es ideal para quienes buscan algo fuera de lo común y lleno de estilo.';
            break;
        default:
            serviceInfoText = 'Información no disponible.';
    }
    document.getElementById('service-info').textContent = serviceInfoText;
    document.getElementById('service-info-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('service-info-modal').style.display = 'none';
}


  
  window.onload = () => {
      startCarousel();
  }
