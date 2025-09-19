export const isPromotionApplicable = (promo, branchId, productId, categoryId, subCategoryId, coupon) => {
    if (promo.status !== "active") return false;
  
    const now = new Date();
    if (promo.startDate && now < promo.startDate) return false;
    if (promo.endDate && now > promo.endDate) return false;
  
    if (promo.applyOn === "allBranches") return true;
    if (promo.applyOn === "specificBranches" && promo.branches.includes(branchId)) return true;
    if (promo.applyOn === "products" && promo.products.includes(productId)) return true;
  
    if (promo.applyOn === "categories") {
      return promo.categories.some(c =>
        String(c.categoryId) === String(categoryId) &&
        (!c.subCategoryId || String(c.subCategoryId) === String(subCategoryId))
      );
    }
  
    if (promo.promotionType === "specialCoupon" && coupon === promo.couponCode) return true;
  
    return false;
  };
  