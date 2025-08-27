// request.jsx
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

// 1. 创建axios实例（单独创建，不在这里直接设置拦截器）
const request = axios.create({
    baseURL: 'https://77dc499e.r19.vip.cpolar.cn/',
    timeout: 10000
});

// 2. 自定义Hook：用于设置拦截器（在这里安全使用useNavigate）
export function useSetupRequestInterceptors() {
    const navigate = useNavigate(); // ✅ 在自定义Hook顶层调用Hook，合法
    const isSetup = useRef(false); // 避免重复设置拦截器

    useEffect(() => {
        if (isSetup.current) return; // 已设置过就跳过

        // 3. 设置请求拦截器（添加token）
        request.interceptors.request.use(
            (config) => {
                const token = sessionStorage.getItem('userToken');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // 4. 设置响应拦截器（401时导航到登录页）
        request.interceptors.response.use(
            (response) => response.data,
            (error) => {
                if (error.response?.status === 401) {
                    sessionStorage.removeItem('userToken');
                    navigate('/'); // 这里使用navigate
                }
                return Promise.reject(error);
            }
        );

        isSetup.current = true; // 标记为已设置
    }, [navigate]); // 依赖navigate，变化时重新设置（实际很少变化）

    return request; // 返回axios实例供组件使用
}

// 5. 默认导出axios实例（供非组件场景临时使用，注意此时拦截器可能未设置！）
export default request;