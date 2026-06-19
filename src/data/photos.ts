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
const generatePhotos = (albumId: string, folderName: string, count: number, excludeList: number[] = []) => {
  const photos = [];
  let fileNum = 1;
  while (photos.length < count) {
    if (!excludeList.includes(fileNum)) {
      photos.push({
        id: `${albumId}-${photos.length + 1}`,
        // Assuming .jpg - change extension if needed
        url: `/images/albums/${folderName}/${fileNum}.jpg`,
        // Randomize aspect ratio for the masonry layout
        aspectRatio: [1.5, 0.8, 1][photos.length % 3],
      });
    }
    fileNum++;
  }
  return photos;
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
    photoCount: 26,
    photos: generatePhotos("seethawaloka", "Seethawaloka", 26, [13]),
  },

  {
    id: "blissful-bash",
    title: "Blissful Bash Night",
    coverId: "blissful-bash-1",
    photoCount: 20,
    photos: generatePhotos("blissful-bash", "Blissful-Bash-Night", 20),
  },
  {
    id: "echoes-holi",
    title: "Echoes of Holi",
    coverId: "echoes-holi-1",
    photoCount: 32,
    photos: generatePhotos("echoes-holi", "Echoes-of-Holi", 32),
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
