import React from 'react';
import './Story.css';

const Story = () => {
  return (
    <section id="story" className="story-section">
      <h2 className="section-title">My Story</h2>
      <div className="story-content">
      <p>
        My passion for technology started at a young age. I grew up in a small village in Northern Finland called Karigasniemi, where seeing friends often meant a long drive. That distance sparked my interest in video games and technology as a way to connect with others.
        <br /><br />
        My friends and I would spend hours playing together online — it wasn’t just entertainment; it was our way of building community. We ran Minecraft servers where we built entire worlds from scratch, learning the basics of teamwork along the way. I was the guy who kept the computer running, set up the servers, and helped everyone when something broke or when we wanted to try new mods or texture packs.
        <br /><br />
        Those early experiences with gaming and troubleshooting didn’t just teach me technical skills — they sparked my curiosity and set me on the path to becoming a developer.
      </p>
      </div>
    </section>
  );
}

export default Story;