import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { albums, type Album } from '../../data/photos';
import { CircularGallery, type CircularGalleryItem } from '../ui/CircularGallery';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

export function Photography() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    const galleryItems: CircularGalleryItem[] = useMemo(() => {
        return albums.map((album) => ({
            image: album.photos[0]?.url || '',
            text: album.title,
            description: `${album.photoCount} High-Resolution Photographs • Curated Collection`,
            alt: album.title,
            album: album
        }));
    }, []);

    // Reset zoom when changing photos
    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedAlbum && currentPhotoIndex !== null) {
            setZoomLevel(1);
            setCurrentPhotoIndex((prev) => (prev! + 1) % selectedAlbum.photos.length);
        }
    }, [selectedAlbum, currentPhotoIndex]);

    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedAlbum && currentPhotoIndex !== null) {
            setZoomLevel(1);
            setCurrentPhotoIndex((prev) => (prev! - 1 + selectedAlbum.photos.length) % selectedAlbum.photos.length);
        }
    }, [selectedAlbum, currentPhotoIndex]);

    const handleClose = useCallback(() => {
        setCurrentPhotoIndex(null);
        setZoomLevel(1);
    }, []);

    const toggleZoom = (e: React.MouseEvent) => {
        e.stopPropagation();
        setZoomLevel((prev) => (prev > 1 ? 1 : 2.5));
    };

    // Keyboard Navigation
    useEffect(() => {
        if (currentPhotoIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') handleClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentPhotoIndex, handleNext, handlePrev, handleClose]);

    return (
        <section id="photography" className="py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <AnimatePresence mode="wait">
                    {!selectedAlbum && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
                                Visual <span className="text-brand">Stories</span>
                            </h2>
                            <div className="w-20 h-1 bg-brand rounded-full mb-3" />
                            <p className="text-slate-400 text-sm md:text-base max-w-xl">
                                Panoramic WebGL arched gallery of photographic collections. Drag or scroll through albums, and click any card to open the full album.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 3D Circular Gallery View */}
                <AnimatePresence mode="wait">
                    {!selectedAlbum ? (
                        <motion.div
                            key="circular-gallery-view"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center"
                        >
                            {/* Curved WebGL Arc Gallery Container */}
                            <div className="relative w-full h-[560px] sm:h-[620px] md:h-[660px] flex items-center justify-center">
                                <CircularGallery
                                    items={galleryItems}
                                    bend={3}
                                    textColor={isDark ? '#f8fafc' : '#002455'}
                                    borderRadius={0.06}
                                    scrollEase={0.05}
                                    scrollSpeed={2}
                                    itemSize={1.05}
                                    itemAspect={0.78}
                                    gap={0.24}
                                    wave={1}
                                    fadeEdges={0.14}
                                    shadow={0.3}
                                    snap={true}
                                    openOnClick={false}
                                    onItemClick={(item, index) => {
                                        const album = (item as { album?: Album })?.album || albums[index];
                                        if (album) setSelectedAlbum(album);
                                    }}
                                    className="w-full h-full"
                                />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="album-view"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <button
                                onClick={() => setSelectedAlbum(null)}
                                className="mb-8 flex items-center gap-2 text-slate-400 hover:text-brand transition-colors"
                            >
                                <ArrowLeft size={20} />
                                Back to Albums
                            </button>

                            <h2 className="text-3xl font-bold text-slate-100 mb-8">{selectedAlbum.title}</h2>

                            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                                {selectedAlbum.photos.map((photo, index) => (
                                    <motion.div
                                        key={photo.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="break-inside-avoid relative group rounded-lg overflow-hidden cursor-zoom-in shadow-sm hover:shadow-md transition-shadow"
                                        onClick={() => {
                                            setZoomLevel(1);
                                            setCurrentPhotoIndex(index);
                                        }}
                                    >
                                        <img
                                            src={photo.url}
                                            alt="Gallery item"
                                            className="w-full h-auto bg-slate-900"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {currentPhotoIndex !== null && selectedAlbum && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4"
                            onClick={handleClose}
                        >
                            {/* Controls Overlay */}
                            <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
                                <button
                                    onClick={toggleZoom}
                                    className="p-3 bg-slate-800 rounded-full text-slate-100 hover:bg-slate-700 transition-all shadow-sm border border-slate-700"
                                >
                                    {zoomLevel > 1 ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
                                </button>
                                <button
                                    onClick={handleClose}
                                    className="p-3 bg-slate-800 rounded-full text-slate-100 hover:bg-slate-700 transition-all shadow-sm border border-slate-700"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 md:left-8 z-50 p-3 bg-slate-800 rounded-full text-slate-100 hover:bg-slate-700 transition-all shadow-sm group border border-slate-700"
                            >
                                <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={handleNext}
                                className="absolute right-4 md:right-8 z-50 p-3 bg-slate-800 rounded-full text-slate-100 hover:bg-slate-700 transition-all shadow-sm group border border-slate-700"
                            >
                                <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Main Image */}
                            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                                <motion.img
                                    key={currentPhotoIndex}
                                    src={selectedAlbum.photos[currentPhotoIndex].url}
                                    alt="Full screen"
                                    className="max-w-full max-h-[90vh] object-contain shadow-2xl cursor-grab active:cursor-grabbing"
                                    onClick={(e) => e.stopPropagation()}
                                    animate={{ scale: zoomLevel }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag={zoomLevel > 1}
                                    dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                                    dragElastic={0.1}
                                />
                            </div>

                            {/* Counter */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-950 text-sm font-medium px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
                                {currentPhotoIndex + 1} / {selectedAlbum.photos.length}
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
