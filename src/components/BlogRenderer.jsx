import React from 'react';

export function BlogRenderer({ content }) {
  if (!content || !Array.isArray(content)) return null;

  return (
    <div className="space-y-6">
      {content.map((block, idx) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={idx} className="text-slate-600 leading-relaxed text-lg font-medium">
                {block.text}
              </p>
            );
          
          case 'heading': {
            const Tag = `h${block.level}`;
            let headingStyles = "font-black tracking-tight text-slate-900";
            if (block.level === 1) headingStyles += " text-4xl mt-16 mb-8";
            else if (block.level === 2) headingStyles += " text-3xl mt-14 mb-6";
            else if (block.level === 3) headingStyles += " text-2xl mt-10 mb-4";
            else headingStyles += " text-xl mt-8 mb-4";
            
            return <Tag key={idx} className={headingStyles}>{block.text}</Tag>;
          }

          case 'code':
            return (
              <div key={idx} className="relative group my-8">
                <div className="absolute top-4 right-6 text-[10px] font-black text-slate-400 uppercase tracking-widest transition-colors z-10">
                  {block.language}
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-800 bg-[#0f172a]">
                  {/* MacOS style window controls */}
                  <div className="flex items-center gap-2 px-6 py-4 border-b border-slate-800/50 bg-[#0f172a]/80 backdrop-blur-md">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  </div>
                  <pre className="p-6 overflow-x-auto">
                    <code className="text-sm font-mono text-slate-300 whitespace-pre">
                      {block.code}
                    </code>
                  </pre>
                </div>
              </div>
            );

          case 'image':
            return (
              <figure key={idx} className="my-12">
                <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-xl group">
                   <img 
                    src={block.url} 
                    alt={block.caption || 'Blog Image'} 
                    className="w-full object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                   />
                </div>
                {block.caption && (
                  <figcaption className="text-center text-[10px] font-black text-slate-400 mt-4 uppercase tracking-widest">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case 'video':
            return (
              <figure key={idx} className="my-16">
                <div className="aspect-video w-full rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden bg-slate-900 relative group">
                  <iframe 
                    src={block.url} 
                    className="absolute inset-0 w-full h-full border-0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title={block.caption || 'Blog Video'}
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-center text-[10px] font-black text-slate-400 mt-6 uppercase tracking-widest">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
            
          case 'list':
            return (
              <ul key={idx} className="list-none space-y-3 my-6 pl-4">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-lg font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
