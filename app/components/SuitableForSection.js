'use client'

import React from 'react'

const SuitableForSection = ({ service }) => {
  return (
    <section style={{ 
      padding: '8rem 0', 
      background: 'var(--background-darker)',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at 70% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem', 
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{ 
          fontSize: '3rem', 
          marginBottom: '2rem', 
          background: 'linear-gradient(135deg, #ffffff, #e0e0e0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Perfect For Your Space
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--text-secondary)', 
          marginBottom: '3rem', 
          maxWidth: '600px', 
          margin: '0 auto 3rem',
          lineHeight: '1.7'
        }}>
          Our {service.name.toLowerCase()} installation is expertly designed for various 
          applications and environments, delivering optimal performance in each setting.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}>
          <style jsx>{`
            .area-tag {
              background: linear-gradient(135deg, ${service.color.primary}, ${service.color.secondary});
              color: white;
              padding: 1rem 2rem;
              border-radius: 25px;
              font-weight: 600;
              font-size: 1.1rem;
              box-shadow: 0 4px 15px rgba(0,0,0,0.2);
              transition: transform 0.3s ease;
              cursor: default;
              display: inline-block;
            }
            .area-tag:hover {
              transform: translateY(-3px);
            }
          `}</style>
          {service.suitableFor.map((area, index) => (
            <span 
              key={index}
              className="area-tag"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuitableForSection 