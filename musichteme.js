document.addEventListener('DOMContentLoaded', () => {
  // Fixed Navigation
  const nav = document.querySelector('.fixed-nav');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
          nav.classList.add('scrolled');
      } else {
          nav.classList.remove('scrolled');
      }
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });

  // Music Player
  const playBtn = document.querySelector('.play-btn');
  const songArt = document.querySelector('.song-art');
  const progress = document.querySelector('.progress');
  const playlistItems = document.querySelectorAll('.playlist-item');
  let isPlaying = false;

  // Toggle play/pause
  playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      playBtn.querySelector('i').className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
      songArt.style.animation = isPlaying ? 'rotate 20s linear infinite' : 'none';
  });

  // Playlist item click
  playlistItems.forEach(item => {
      item.addEventListener('click', () => {
          // Remove active class from all items
          playlistItems.forEach(i => i.classList.remove('active'));
          // Add active class to clicked item
          item.classList.add('active');
          
          // Update now playing
          const title = item.querySelector('h4').textContent;
          const artist = item.querySelector('p').textContent;
          const art = item.querySelector('img').src;
          
          document.querySelector('.song-title').textContent = title;
          document.querySelector('.song-artist').textContent = artist;
          document.querySelector('#song-art').src = art;

          // Auto play
          isPlaying = true;
          playBtn.querySelector('i').className = 'fas fa-pause';
          songArt.style.animation = 'rotate 20s linear infinite';
      });
  });

  // Add rotation animation
  const style = document.createElement('style');
  style.textContent = `
      @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
      }
  `;
  document.head.appendChild(style);
});
