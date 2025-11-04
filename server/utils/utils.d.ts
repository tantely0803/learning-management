export declare const updateCourseVideoInfo: (course: any, sectionId: string, chapterId: string, videoUrl: string) => void;
export declare const validateUploadedFiles: (files: any) => void;
export declare const getContentType: (filename: string) => "video/mp4" | "application/vnd.apple.mpegurl" | "application/dash+xml" | "video/MP2T" | "video/iso.segment" | "application/octet-stream";
export declare const handleAdvancedVideoUpload: (s3: any, files: any, uniqueId: string, bucketName: string) => Promise<{
    videoUrl: string;
    videoType: string;
} | null>;
export declare const mergeSections: (existingSections: any[], newSections: any[]) => any[];
export declare const mergeChapters: (existingChapters: any[], newChapters: any[]) => any[];
export declare const calculateOverallProgress: (sections: any[]) => number;
//# sourceMappingURL=utils.d.ts.map