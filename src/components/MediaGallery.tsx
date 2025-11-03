import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MediaGalleryProps {
  images?: string[];
  videos?: string[];
}

const MediaGallery = ({ images, videos }: MediaGalleryProps) => {
  // Default placeholder images and videos if none provided
  const defaultImages = Array(4).fill("");
  const defaultVideos = Array(3).fill("");
  
  const displayImages = images && images.length > 0 ? images : defaultImages;
  const displayVideos = videos && videos.length > 0 ? videos : defaultVideos;

  return (
    <>
      {/* Videos Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Product Videos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {displayVideos.map((video, i) => (
              <div key={i} className="aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                {video ? (
                  video.endsWith('.mp4') || video.endsWith('.webm') ? (
                    <video
                      src={video}
                      className="w-full h-full object-cover"
                      controls
                      controlsList="nodownload"
                      disablePictureInPicture
                      onContextMenu={(e) => e.preventDefault()}
                      title={`Product video ${i + 1}`}
                    />
                  ) : (
                    <iframe
                      src={video}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`Product video ${i + 1}`}
                    />
                  )
                ) : (
                  <span className="text-muted-foreground text-sm text-center px-4">Automation in motion — visuals loading soon…</span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Images Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Product Images</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayImages.map((image, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden bg-muted border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                {!image ? (
                  <span className="text-muted-foreground text-sm text-center px-4">Automation in motion — visuals loading soon…</span>
                ) : (
                  <img
                    src={image}
                    alt={`Product image ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default MediaGallery;
