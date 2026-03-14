// EAA Insiders Gallery Configuration
// UPDATE THIS AFTER DEPLOYING THE WORKER!

const GALLERY_CONFIG = {
  // Worker URL - same as Aces
  WORKER_URL: 'https://r2-photo-worker.tcc-aces.workers.dev',
  
  // API key for upload/delete operations
  API_KEY: 'd26ebdb699a89c7ba7ea8c78d230de60885cfd190f08eb4cb42afbd08e22cadc',
  
  // Member password (view, upload, download)
  PASSWORD: 'insiders2026',
  
  // Admin password (delete, set cover, create/delete events)
  ADMIN_PASSWORD: 'insidersadmin2026',
  
  // R2 bucket prefix for Insiders photos (separates from Aces)
  PREFIX: 'insiders-events/',
  
  // Enable localStorage fallback
  USE_FALLBACK: true,
  
  // Debug mode
  DEBUG: false
};
