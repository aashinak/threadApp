const conf = {
    
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),

    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    appwriteThreadsCollectionId : String(import.meta.env.VITE_APPWRITE_THREADS_COLLECTION_ID),

    appwriteUserProfileCollectionId : String(import.meta.env.VITE_APPWRITE_USERPROFILE_COLLECTION_ID),

    appwriteCommentsCollectionId : String(import.meta.env.VITE_APPWRITE_COMMENTS_COLLECTION_ID),

    appwriteThreadsBucketId : String(import.meta.env.VITE_APPWRITE_THREADS_BUCKET_ID),
    
    appwriteUserImageBucketId : String(import.meta.env.VITE_APPWRITE_USERIMAGE_BUCKET_ID),

}

export default conf