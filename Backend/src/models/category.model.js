import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "subcayegory name is required "],
            trim: true
        },
        priority:{
            type:Number,
            default:5
        }
    },
    { _id: true }
)


const categorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: [true, "category name is required"],
            trim: true,
            uique: true
        },
        isSubCategory: {
            type: Boolean,
            default: false
        },
        priority:{
            type:Number,
            default:5
        },
        subCategories: [subCategorySchema],
        isInList: {
            type: Boolean,
            default: true
        },
        categoryImage: {
            type: String
        }
    },
    { timestamps: true }
)


categorySchema.pre("valiadte", function (next) {
    if (this.subCategory && (!this.subCategories || this.subCategories.length === 0)) {
        this.invalidate("subcategories", "Atleast one subcategory is required if subCategory is true")
    }

    if (!this.subCategory && this.subCategories && this.subCategories.length > 0) {
        this.invalid("subcategories", "subcategories should empty when subcategory is false")
    }
    next()

})


const Category = mongoose.model("category", categorySchema)
export default Category;
