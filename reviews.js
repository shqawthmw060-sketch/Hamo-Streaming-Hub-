// reviews.js

class Review {
    constructor(user, rating, comment) {
        this.user = user;
        this.rating = rating;
        this.comment = comment;
        this.date = new Date();
    }
}

class Reviews {
    constructor() {
        this.reviews = [];
    }

    addReview(review) {
        this.reviews.push(review);
    }

    getAverageRating() {
        if (this.reviews.length === 0) return 0;
        const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
        return total / this.reviews.length;
    }

    getAllReviews() {
        return this.reviews;
    }
}

// Example usage:
const reviews = new Reviews();
reviews.addReview(new Review('User1', 4, 'Great product!'));
reviews.addReview(new Review('User2', 5, 'Excellent service!'));

console.log('Average Rating:', reviews.getAverageRating());
console.log('All Reviews:', reviews.getAllReviews());
