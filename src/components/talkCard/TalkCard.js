import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  return (
    <div>
      <div className="container">
        <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="talk-card-content">
            {talkDetails.image && (
              <div className="talk-card-image-container">
                <img
                  src={talkDetails.image}
                  alt={talkDetails.title}
                  className="talk-card-image"
                />
              </div>
            )}
            <div className="talk-card-text-content">
              <div className="talk-card-title">{talkDetails.title}</div>
              <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

              <div className="card-footer-button-div">
                <a
                  href={talkDetails.event_url}
                  target="_"
                  className="talk-button"
                >
                  Event
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
