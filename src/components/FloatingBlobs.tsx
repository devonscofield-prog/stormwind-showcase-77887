const FloatingBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 - Top Left */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          top: '10%',
          left: '5%',
        }}
      />
      
      {/* Blob 2 - Top Right */}
      <div 
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-15 animate-float-slower"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent-teal)) 0%, transparent 70%)',
          top: '20%',
          right: '10%',
          animationDelay: '2s',
        }}
      />
      
      {/* Blob 3 - Middle Left */}
      <div 
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-10 animate-float-medium"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent-green)) 0%, transparent 70%)',
          top: '50%',
          left: '15%',
          animationDelay: '4s',
        }}
      />
      
      {/* Blob 4 - Bottom Right */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-15 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary-dark)) 0%, transparent 70%)',
          bottom: '10%',
          right: '5%',
          animationDelay: '1s',
        }}
      />
      
      {/* Blob 5 - Bottom Center */}
      <div 
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-10 animate-float-slower"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent-teal)) 0%, transparent 70%)',
          bottom: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          animationDelay: '3s',
        }}
      />
    </div>
  );
};

export default FloatingBlobs;
