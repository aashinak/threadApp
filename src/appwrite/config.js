import { Client, Databases, Storage, ID, Query } from "appwrite"
import conf from "../conf/conf"

export class Service {
    client = new Client()
    databases
    bucketUser
    bucketThread

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucketUser = new Storage(this.client)
        this.bucketThread = new Storage(this.client)
    }


//---------------------------------------Service methods-----------------------------------------------

//create thread
//upload thread images/video
//create user bio, link
//upload userImage
//increment of no of followers
//create comments

// get thread
// get threads
// get userImage
// get thread Image or video
// get comments
// get userprofile

// update thread
// update thread image

// delete thread
// delete userImage
// delete comment




//create thread
async createThread({title, slug, featuredImage, userId}){
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteThreadsCollectionId,
            slug,
            {
                title, featuredImage, userId
            }
        )
    } catch (error) {
        console.log("Appwrite service :: createThread() :: ", error)
        return false
    }
}


//upload thread images/video
async uploadThreadFile(file){
    try {
        return await this.bucketThread.createFile(
            conf.appwriteThreadsBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite service :: uploadThreadFile() :: ",error);
        return false
    }
}


//create user bio, link
async createUserBio({bio, slug, link, followers, userImage, userId}){
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteUserProfileCollectionId,
            slug,
            {
                bio, link, userId, followers, userImage
            }
        )
    } catch (error) {
        console.log("Appwrite service :: createUserBio() :: ", error)
        return false
    }
}

//upload userImage
async uploadUserImage(file){
    try {
        return await this.bucketUser.createFile(
            conf.appwriteUserImageBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite service :: uploadUserImageFile() :: ",error);
        return false
    }
}

//create comments






// get thread
async getThread(slug){
    try {
       return await this.databases
        .getDocument(conf.appwriteDatabaseId, conf.appwriteThreadsCollectionId, slug)
    } catch (error) {
        console.log("Appwrite service :: getThread() :: ",error);
        return false
    }
}

// get threads
async getThreads(queries = [Query.equal("status", "active")]){
    try {
        return await this.databases
        .listDocuments(conf.appwriteDatabaseId, conf.appwriteThreadsCollectionId, queries)
    } catch (error) {
        console.log("Appwrite service :: getThreads() :: ",error);
        return false
    }
}

// get userImage
getUserImagePreview(fileId){
    // getFilePreview method is faster thats why didnt using await,async
    return this.bucketUser.getFilePreview(
        conf.appwriteUserImageBucketId,
        fileId
    ).href
}


// get thread Image or video
async getThreadFile(fileId){
    return await this.bucketThread.getFile(
        conf.appwriteThreadsBucketId,
        fileId
    ).href
}


// get comments
// get userprofile
async getUserProfile(slug){
    try {
       return await this.databases
        .getDocument(conf.appwriteDatabaseId, conf.appwriteUserProfileCollectionId, slug)
    } catch (error) {
        console.log("Appwrite service :: getUserProfile() :: ",error);
        return false
    }
}

// update thread
async updateThread(slug, {title, likes, featuredImage}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteThreadsCollectionId,
            slug,
            {
                title, featuredImage, likes
            }

        )
    } catch (error) {
        console.log("Appwrite service :: updateThread() :: ",error);
        return false
    }
}


// update user profile
async updateUserProfile(slug, {link, followers, userImage, bio}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteUserProfileCollectionId,
            slug,
            {
                link, followers, userImage, bio
            }

        )
    } catch (error) {
        console.log("Appwrite service :: updateUserProfile() :: ",error);
        return false
    }
}


// delete thread
async deleteThread(slug){
    try {
        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteThreadsCollectionId,
            slug
        )
        return true
    } catch (error) {
        console.log("Appwrite service :: deleteThread() :: ",error);
        return false
    }
}

// delete userImage
async deleteUserImage(fileId){
    try {
        await this.bucketUser.deleteFile(
            conf.appwriteUserImageBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("Appwrite service :: deleteUserImage() :: ",error);
        return false
    }
}


// delete thread image/video
async deleteThreadFile(fileId){
    try {
        await this.bucketThread.deleteFile(
            conf.appwriteThreadsBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("Appwrite service :: deleteThreadFile() :: ",error);
        return false
    }
}
// delete comment


}

const service = new Service()

export default service