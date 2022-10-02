import mongoose from "mongoose"
import crypto from "crypto"

/**
 * Schema configuration
 *
 * type - variable type
 * trim - to remove spaces
 * required - necessary for validation
 * max - length of variable value
 * unique - no same usernames
 * index: for searching and indexing purposes
 */

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      max: 20,
      unique: true,
      index: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: String,
      default: "subscriber",
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
  { timestamps: true }
)

//Create virtual fields to manage password encryption
userSchema
  .virtual("password")
  .set(function (password) {
    //Create temp variable for storing password from client
    this._password = password
    //Generate Salt
    this.salt = this.makeSalt()
    //Encrypt password
    this.hashedPassword = this.encryptPassword(password)
  })
  .get(function () {
    return this._password
  })

//Create methods to authenticate, encrypt and make salt
userSchema.methods = {
  encryptPassword: function (password) {
    if (!password) return ""
    try {
      return crypto.createHmac("sha1", this.salt).update(password).digest("hex")
    } catch (err) {
      console.log("userSchema encryption error: ", err)
      return ""
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + ""
  },
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword
  },
}

export default mongoose.model("User", userSchema)
