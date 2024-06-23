import matplotlib.pyplot as plt
from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans

# Generate synthetic dataset
X, _ = make_blobs(n_samples=1000, centers=3, n_features=2, random_state=42)

# Fit KMeans model
kmeans = KMeans(n_clusters=3, random_state=0, n_init="auto").fit(X)
centroids = kmeans.cluster_centers_

# Generate new data point for prediction
pred, _ = make_blobs(n_samples=1, centers=1, n_features=2, random_state=42)
prediction = kmeans.predict(pred)

# Plot the clusters, centroids, and new data point
plt.figure(figsize=(10, 6))
plt.scatter(X[:, 0], X[:, 1], c=kmeans.labels_, cmap='viridis', s=50, alpha=0.5)
plt.scatter(centroids[:, 0], centroids[:, 1], c='red', marker='x', s=100, label='Centroids')
plt.scatter(pred[:, 0], pred[:, 1], c='blue', marker='o', s=100, label='New Data Point')
plt.title('KMeans Clustering')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.legend()
plt.show()

centroids, pred, prediction
