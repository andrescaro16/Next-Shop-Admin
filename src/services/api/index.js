const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
    products: {
        getProducts: (limit = 10, offset = 0) => `${API+VERSION}/products?limit=${limit}&offset=${offset}`,
        postProduct: `${API+VERSION}/products`,
        getProduct: (id) => `${API+VERSION}/products/${id}`,
        putProduct: (id) => `${API+VERSION}/products/${id}`,
        deleteProduct: (id) => `${API+VERSION}/products/${id}`,
    },
    users: {
        getUsers: (limit = 10) => `${API+VERSION}/users?limit=${limit}`,
        postUser: `${API+VERSION}/users`,
        getUser: (id) => `${API+VERSION}/users/${id}`,
        putUser: (id) => `${API+VERSION}/users/${id}`,
        deleteUser: (id) => `${API+VERSION}/users/${id}`,
        postAvailableUser: `${API+VERSION}/users/is-available`,
    },
    auth: {
        login: `${API+VERSION}/auth/login`,
        getProfile: `${API+VERSION}/auth/profile`,
        refreshToken: `${API+VERSION}/auth/refresh-token`,
    },
    categories: {
        getCategories: (limit = 10) => `${API+VERSION}/categories?limit=${limit}`,
        postCategory: `${API+VERSION}/categories`,
        getCategory: (id) => `${API+VERSION}/categories/${id}`,
        putCategory: (id) => `${API+VERSION}/categories/${id}`,
        deleteCategory: (id) => `${API+VERSION}/categories/${id}`,
        getProductsByCategory: (id, limit = 10, offset = 0) => `${API+VERSION}/categories/${id}/products?limit=${limit}&offset=${offset}`,
    },
    files: {
        uploadFile: `${API+VERSION}/files/upload`,
        getFile: (filename) => `${API+VERSION}/files/${filename}`,
    },
}