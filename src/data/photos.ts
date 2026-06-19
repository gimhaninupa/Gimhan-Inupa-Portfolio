export interface Photo {
  id: string;
  url: string; // In a real app, these would be real URLs. I'll use placeholders.
  aspectRatio: number; // width / height
}

export interface Album {
  id: string;
  title: string;
  coverId: string;
  photoCount: number;
  photos: Photo[];
}

// Helper to generate photo objects for sequentially named files (1.jpg, 2.jpg, etc.)
const generatePhotos = (albumId: string, folderName: string, count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${albumId}-${i + 1}`,
    // Assuming .jpg - change extension if needed
    url: `/images/albums/${folderName}/${i + 1}.jpg`,
    // Randomize aspect ratio for the masonry layout
    aspectRatio: [1.5, 0.8, 1][(i + 1) % 3],
  }));
};

export const albums: Album[] = [
  {
    id: "mathaka-handiya",
    title: "Mathaka Handiya",
    coverId: "mathaka-handiya-1",
    photoCount: 41,
    photos: generatePhotos("mathaka-handiya", "Mathaka-Handiya", 41),
  },

  {
    id: "seethawaloka",
    title: "Seethawaloka",
    coverId: "seethawaloka-1",
    photoCount: 27, // Adjust exact count if needed
    photos: generatePhotos("seethawaloka", "Seethawaloka", 27),
  },

  {
    id: "blissful-bash",
    title: "Blissful Bash Night",
    coverId: "blissful-bash-1",
    photoCount: 20, // Adjust exact count if needed
    photos: generatePhotos("blissful-bash", "Blissful-Bash-Night", 20),
  },
  {
    id: "echoes-holi",
    title: "Echoes of Holi",
    coverId: "echoes-holi-1",
    photoCount: 33,
    photos: generatePhotos("echoes-holi", "Echoes-of-Holi", 33),
  },
  {
    id: "Convocation",
    title: "Convocation",
    coverId: "convocation-1",
    photoCount: 14,
    photos: generatePhotos("convocation", "Convocation", 14),
  },
  {
    id: "ethereal-evening",
    title: "Ethereal Evening",
    coverId: "ethereal-evening-1",
    photoCount: 6,
    photos: generatePhotos("ethereal-evening", "Ethereal-Evening", 6),
  },
];
