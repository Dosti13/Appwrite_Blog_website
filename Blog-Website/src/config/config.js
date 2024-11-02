const config= {
    VITE_APPWRITE_URL: String(import.meta.env.VITE_APPWRITE_URL),
    VITE_PROJECT_ID: String(import.meta.env.VITE_PROJECT_ID),
    VITE_DATABASE_ID:String(import.meta.env.VITE_DATABASE_ID),
    VITE_COLLECTIONN_ID: String(import.meta.env.VITE_COLLECTIONN_ID),
    VITE_BUCKET_ID:String(import.meta.env.VITE_BUCKET_ID)
}
export default config