import mongoose, { ConnectOptions } from 'mongoose';

export const connectDB = async () => {
  try {
    const { MONGODB_HOST, MONGODB_PORT, MONGODB_NAME } = process.env;
    const uri = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;
    const options: ConnectOptions = { useNewUrlParser: true, useUnifiedTopology: true };

    await mongoose.connect(uri, options);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
