// Supplier
import {
  createSupplier,
  loginSupplier,
  addProductsToSupplier,
  getSupplier,
  getSupplierById,
  placedOrders,
  placeSupplierQuotation,
} from "./supplierController.js";

// import { createDepartment, getDepartments } from "./departmentController.js";
import {createContructionSite,getContructionSites} from './ContructionSiteController.js'

import {
  createSiteManager,
  loginSiteManager,
  getSiteMangers,
} from "./siteManagerController.js";

import { createOrderRequest } from "./siteManagerController.js";

import {
  createManager,
  loginManager,
  getManagers,
  approveRequest,
  declineRequest,
  getUnApprovedProducts,
  approveQuotations,
} from "./managerController.js";

import {
  ordersToApprove,
  approvedRequests,
  declinedRequests,
} from "./orderRequestController.js";

import {
  createDeliveryAdvice,
  getDeliveryAdvicesToBeApproved,
  approveDeliveryAdviceRequest,
  saveDeliveryAdviceAsDraft,
  getApprovedDeliveryAdvices,
  getDeliveryAdvicesDrafts,
} from "./deliveryAdviceControllers.js";

// Administrator
import {
  createAdministrator,
  loginAdministrator,
} from "./administratorController.js";

export {
  // Suppliers
  createSupplier,
  loginSupplier,
  addProductsToSupplier,
  getSupplier,
  getSupplierById,
  placedOrders,
  placeSupplierQuotation,

  // Departmetns
  // createDepartment,
  // getDepartments,
  createContructionSite,
  getContructionSites,

  // SiteMangers
  createSiteManager,
  loginSiteManager,
  getSiteMangers,

  // Manager
  createManager,
  getManagers,
  loginManager,
  approveRequest,
  declineRequest,
  getUnApprovedProducts,
  approveQuotations,

  // OrderRequest
  createOrderRequest,
  ordersToApprove,
  approvedRequests,
  declinedRequests,

  // Delivery Advice
  createDeliveryAdvice,
  getDeliveryAdvicesToBeApproved,
  saveDeliveryAdviceAsDraft,
  approveDeliveryAdviceRequest,
  getDeliveryAdvicesDrafts,
  getApprovedDeliveryAdvices,

  // Procument Officer
  createAdministrator,
  loginAdministrator,
};
