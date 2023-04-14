import axios from "axios"

export const DeleteReview = async ( reviewId) => {
    try{
      const res = await axios.delete(`http://localhost:8000/delete/${reviewId}`)
      return res.data
    } catch (error) {
      throw error
    }
  }