const conf = {
    appwriteUrl: String(import.meta.env.VITE_AAPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_AAPWRITE_PROJECT_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_AAPWRITE_DATABASE_ID),
    appwriteCollectionID: String(import.meta.env.VITE_AAPWRITE_COLLECTION_ID),
    appwriteBucketID: String(import.meta.env.VITE_AAPWRITE_BUCKET_ID),
    
}


export default conf