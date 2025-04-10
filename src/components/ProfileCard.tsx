'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface ProfileCardProps {
  name: string;
  title: string;
  location: string;
  image?: string;
  stats?: {
    posts?: number;
    categories?: number;
    tags?: number;
  };
}

export default function ProfileCard({
  name,
  title,
  location,
  image = '',
  stats = {
    posts: 51,
    categories: 10,
    tags: 50
  }
}: ProfileCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative bg-dark-bg border border-accent-secondary max-w-xs w-full mx-auto">
      {/* 右上角切角 */}
      <div className="absolute top-0 right-0 w-16 h-12 bg-dark-bg overflow-hidden">
        <div className="absolute -right-4 -top-4 w-16 h-16 rotate-45 border-b border-accent-secondary"></div>
      </div>
      
      {/* 邊框發光效果 */}
      <div className="absolute inset-0 border border-accent-secondary opacity-75 pointer-events-none"></div>
      <div className="absolute inset-[-1px] border border-accent-secondary opacity-50 blur-[1px] pointer-events-none"></div>
      
      <div className="p-6 pt-8 text-center">
        <div className="w-36 h-36 mx-auto mb-2 relative border-2 border-accent-secondary bg-dark-bg/50 flex items-center justify-center overflow-hidden">
          {!imageError ? (
            <div className="relative w-full h-full">
              <Image 
                src={image || '/next.svg'} 
                alt={name} 
                fill
                className="object-cover"
                onError={() => setImageError(true)}
                sizes="(max-width: 144px) 100vw, 144px"
              />
            </div>
          ) : (
            <div className="text-accent-primary text-4xl font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        
        <h2 className="text-2xl font-bold text-accent-primary mb-1 glitch" data-text={name}>
          {name}
        </h2>
        
        <p className="text-foreground mb-1 font-mono">{title}</p>
        
        <p className="flex items-center justify-center text-accent-secondary text-sm mb-4">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
          </svg>
          {location}
        </p>
        
        <div className="grid grid-cols-3 border-t border-b border-accent-secondary py-3 text-center">
          <div className="flex flex-col">
            <span className="text-xs text-accent-secondary font-mono">POSTS</span>
            <span className="text-2xl text-accent-primary font-bold">{stats.posts}</span>
          </div>
          <div className="flex flex-col border-l border-r border-accent-secondary">
            <span className="text-xs text-accent-secondary font-mono">CATEGORIES</span>
            <span className="text-2xl text-accent-primary font-bold">{stats.categories}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-accent-secondary font-mono">TAGS</span>
            <span className="text-2xl text-accent-primary font-bold">{stats.tags}</span>
          </div>
        </div>
        
        <button className="w-full bg-accent-tertiary text-dark-bg py-2 mt-4 font-mono hover:bg-accent-secondary transition-colors duration-300">
          Follow
        </button>
        
        <div className="flex justify-around mt-4">
          <a href="https://github.com" className="text-accent-secondary hover:text-accent-primary" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://twitter.com" className="text-accent-secondary hover:text-accent-primary" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0.0.0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="https://linkedin.com" className="text-accent-secondary hover:text-accent-primary" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        
        {/* 底部標籤 */}
        <div className="absolute bottom-0 right-0 text-xs text-accent-secondary font-mono opacity-50 p-1">
          R11
        </div>
      </div>
    </div>
  );
} 