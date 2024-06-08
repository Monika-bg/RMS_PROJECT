import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  twoFactorAuth: {
    type: Boolean,
    default: false
  }
});

userSchema.methods.comparePassword = async function (password) {
  return password === this.password;
};

userSchema.statics.findByEmail = async function(email) {
  try {
    return await this.findOne({ email });
  } catch (error) {
    throw error;
  }
};

userSchema.statics.signup = async function(name, email, password, dateOfBirth) {
  try {
    const user = new this({ name, email, password, dateOfBirth });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

userSchema.statics.resetPassword = async function(email, dateOfBirth, newPassword) {
  try {
    const user = await this.findByEmail(email);
    if (!user) {
      throw new Error("User not found.");
    }
    
    const providedDate = new Date(dateOfBirth).toISOString().split('T')[0];
    const storedDate = user.dateOfBirth.toISOString().split('T')[0];
    
    if (providedDate !== storedDate) {
      throw new Error("Date of birth does not match.");
    }
    
    user.password = newPassword;
    await user.save();
    return true;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("User", userSchema);

export { User };
