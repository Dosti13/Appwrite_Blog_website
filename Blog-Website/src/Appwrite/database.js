import config from "../config/config";
import {Client ,Databases,Storage ,Query, ID} from 'appwrite' 

export class  Service{
    client = new Client()
    database
    storage
    constructor(){
        this.client.setEndpoint(config.VITE_APPWRITE_URL)
        .setProject(config.VITE_PROJECT_ID)
 
        this.database = new Databases(this.client)
        this.storage = new Storage(this.client)
        }

        async creatPost({title,slug,content,featuredimage ,status ,user_id}){
            try {
                return await this.database.createDocument(
                    config.VITE_DATABASE_ID,
                    config.VITE_COLLECTIONN_ID,
                    slug,
                    {
                        title,
                        content,
                        featuredimage,
                        status, 
                        user_id
                    }
                )
            } catch (error) {
                throw error
            }
        }
        async updatePost(slug,{title,content,featuredimage ,status ,user_id}){
            try {
                return await this.database.updateDocument(
                    config.VITE_DATABASE_ID,
                    config.VITE_COLLECTIONN_ID,
                    slug,
                    {
                        title,
                        content,
                        featuredimage,
                        status,
                        user_id
                    }
                )
            } catch (error) {
                throw error
            }

        }
        async deletePost (slug){
            try {
               await this.database.deleteDocument(
                config.VITE_DATABASE_ID,
                config.VITE_COLLECTIONN_ID,
                slug
              )
              return true
            } catch (error) {
                throw error
            }
        }
        async getPost(slug){
            try {
               return await this.database.getDocument(
                      config.VITE_DATABASE_ID,
                    config.VITE_COLLECTIONN_ID,
                    slug,
                )
            } catch (error) {
                throw error
            }
        }
        async getPosts(){
            try {
                return await this.database.listDocuments(
                    config.VITE_DATABASE_ID,
                    config.VITE_COLLECTIONN_ID,
                    [
                        Query.equal("status", "Active")                    ]
                )
            } catch (error) {
                console.log(error);
                
            }
        }
        async uploadFile (file){
            try {
                return await this.storage.createFile(
                    config.VITE_BUCKET_ID,
                    ID.unique(),
                    file

                ) 
            } catch (error) {
                console.log(error);
                 
                return false
            }
        }
        async deleteFile(fileId){
            try {
                return await this.storage.deleteFile(
                    config.VITE_BUCKET_ID,
                    fileId
                )
            } catch (error) {
                console.log(error);
                
            }
        }
         getFilePreview(fileId){
            
            return this.storage.getFilePreview(
                config.VITE_BUCKET_ID,
                fileId
            )
        }
    
    }
    // https://cloud.appwrite.io/v1/storage/buckets/66e33f1d00261c8f8171/files/672242b7001bc9c1bb07/view?project=66e33b0c002d2fea8962&project=66e33b0c002d2fea8962&mode=admin
//    "https://cloud.appwrite.io/v1/storage/buckets/66e33f1d00261c8f8171/files/672242b7001bc9c1bb07/preview?project=66e33b0c002d2fea8962"


const service = new Service()
export default service 