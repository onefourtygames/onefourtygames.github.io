import React, { useEffect, useRef } from 'react';

const BinaryBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: -1000, y: -1000 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            value: string;
            size: number;
            speedX: number;
            speedY: number;
            baseX: number;
            baseY: number;
            density: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.baseX = this.x;
                this.baseY = this.y;
                this.value = Math.random() > 0.5 ? '1' : '0';
                this.size = Math.random() * 10 + 10; // 10-20px
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = 'rgba(0, 255, 255, 0.3)'; // Cyan/Teal from logo
                ctx.font = `${this.size}px monospace`;
                ctx.fillText(this.value, this.x, this.y);
            }

            update() {
                // Mouse interaction (repel/attract)
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = 150;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < maxDistance) {
                    this.x -= directionX;
                    this.y -= directionY;
                    // Highlight when near mouse
                    if (ctx) ctx.fillStyle = 'rgba(255, 0, 255, 0.8)'; // Magenta/Purple highlight
                } else {
                    // Return to base slightly or float freely
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 50;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 50;
                    }
                    // Drift
                    this.baseX += this.speedX;
                    this.baseY += this.speedY;

                    // Wrap around
                    if (this.baseX > canvas!.width) { this.baseX = 0; this.x = 0; }
                    if (this.baseX < 0) { this.baseX = canvas!.width; this.x = canvas!.width; }
                    if (this.baseY > canvas!.height) { this.baseY = 0; this.y = 0; }
                    if (this.baseY < 0) { this.baseY = canvas!.height; this.y = canvas!.height; }
                }

                this.draw();
            }
        }

        const initParticles = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw background gradient
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#0f0c29');
            gradient.addColorStop(0.5, '#302b63');
            gradient.addColorStop(1, '#24243e');
            ctx.fillStyle = gradient; // Or just use CSS for bg
            // Actually, let's keep canvas transparent and use CSS for bg to save perf, 
            // but here we clearRect, so maybe just fillRect with a very low opacity for trails?
            // Let's stick to clearRect for crisp text.

            particles.forEach(particle => particle.update());
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom right, #0a0a0a, #1a1a2e)' }}
        />
    );
};

export default BinaryBackground;
