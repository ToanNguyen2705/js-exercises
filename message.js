// eslint-disable-next-line no-undef
export default new Proxy(
  {
    DEFAULT: "Không xác định",
    PLEASE_SELECT_ORDER_TO_ATTACH_FILE:"Bạn chưa chọn hoá đơn để đính kèm tài liệu!",
    PRODUCT_CODE_IS_EXIST: "Mã sản phẩm đã tồn tại",
    INIT_ORDER_NOT_MATCH_INIT_AMOUNT:"Só dư các đơn hàng phải bằng số dư đầu kỳ của đối tác",
    SERVICE_TYPE_SHOULD_NOT_BE_NULL: "Loại dịch vụ không được để trống",
    SHOULD_NOT_UPDATE_USER_EMAIL: "Không thể cập nhật email!",
    INPUT_DETAIL_SHOULD_NOT_EMPTY: "Vui lòng nhập chi tiết",
    SPECIFIC_MONTH_OVER_INIT_MONTH:"Ngày thực hiện vượt quá ngày sử bắt đầu sử dụng hệ thống",
    ASSET_POSTING_DATE_IS_DIFFERENT_BUY_ORDER_POSTING_DATE:"Ngày đăng ký tài sản vào hệ thống đang khác so với ngày mua tài sản",
    NEED_INPUT_INIT_WAREHOUSE: "Vui lòng nhập cấu hình đầu kỳ cho kho",
    CREDIT_CODE_REQUIRED: "Tài khoản có không được để trống",
    DEBIT_CODE_REQUIRED: "Tài khoản nợ không được để trống",
    ACCOUNTING_CODE_NOT_ALLOW_OBJECT: "Đối tượng định khoản nên bỏ trống",
    PURCHASE_ORDER_SHOULD_NOT_BE_NULL: "Vui lòng chọn đơn hàng mua",
    SALE_ORDER_SHOULD_NOT_BE_NULL: "Vui lòng chọn đơn hàng bán",
    RETURN_PURCHASE_ORDER_SHOULD_NOT_BE_NULL: "Vui lòng chọn đơn trả hàng mua",
    TO_WAREHOUSE_SHOULD_NOT_BE_NULL: "Kho chuyển đến không được để trống",
    RETURN_SALE_ORDER_SHOULD_NOT_BE_NULL: "Vui lòng chọn đơn trả hàng bán",
    DATE_IS_NOT_VALID: "Ngày tháng không hợp lệ",
    MATERIAL_COST_PERCENT_DISTRIBUTION_SHOULD_100_PERCENT:"Tỷ lệ phân bổ chi phí nguyên vật liệu nên là 100%",
    EMPLOYEE_COST_PERCENT_DISTRIBUTION_SHOULD_100_PERCENT:"Tỷ lệ phân bổ chi phí nhân công trực tiếp nên là 100%",
    GENERAL_COST_PERCENT_DISTRIBUTION_SHOULD_100_PERCENT:"Tỷ lệ phân bổ chi phí sản xuất chung nên là 100%",
    MATERIAL_COST_PERCENT_DISTRIBUTION_SHOULD_BE_FULL:"Giá trị phân bổ chi phí nguyên vật liệu nên được phân bổ đúng",
    EMPLOYEE_COST_PERCENT_DISTRIBUTION_SHOULD_BE_FULL:"Giá trị phân bổ chi phí nhân công trực tiếp nên được phân bổ đúng",
    GENERAL_COST_PERCENT_DISTRIBUTION_SHOULD_BE_FULL:"Tỷ lệ phân bổ chi phí sản xuất nên được phân bổ đúng",
    IMPORT_QUANTITY_NOT_EQUAL_FINSIH_QUANTITY:"Số lượng nhập kho không bằng số lượng thành phẩm",
    CAN_NOT_HAS_TRANSACTION_BETWEEN_SAME_BANK:"Không thể xảy ra giao dịch trong cùng một ngân hàng",
    DOCUMENT_BUILDER_SUMMARISE_NOT_EQUAL_ORIGIN_PRICE:"Chi phí cấu thành tài sản chưa bằng với nguyên giá",
    EMPLOYEE_ALREADY_EXISTS: "Nhân viên đã tồn tại trong hệ thống",
    VAT_INVOICE_NUMBER_EXIST: "Hóa đơn đã tồn tại",
    PRODUCT_IS_OUT_OF_STOCK: "Sản phẩm đã hết hàng tồn kho",
    EXPORT_PRODUCT_ALREADY_UPDATE_STATUS:"Phiếu này đã được hạch toán trước đó",
    EMPLOYEE_NOT_FOUND: "Không tìm thấy nhân viên trong hệ thống",
    SERVICE_COMPANY_CAN_NOT_DELETE_BECAUSE_HAS_ACTIVE_EMPLOYEE:"Không thể xóa công ty dịch vụ vì đang có nhân viên hoạt động",
    CLIENT_NOT_FOUND: "Không tìm thấy khách hàng trên hệ thống",
    SERVICE_COMPANY_TAX_ID_ALREADY_EXIST:"Mã số thuế của công ty dịch vụ đã tồn tại",
    CODE_IS_DUPLICATED: "Mã bị trùng lặp",
    OBJECT_CAN_NOT_DELETE_BECAUSE_RELATED_TO_STATEMENT:"Không thể xóa đối tượng vì có chứng từ liên quan",
    PRODUCT_UNIT_NOT_FOUND: "Đơn vị sản phẩm không tìm thấy",
    CLIENT_NOT_BELONG_SERVICE_COMPANY: "Khách hàng không thuộc công ty dịch vụ",
    DOCUMENT_NUMBER_EXIST: "Số chứng từ đã tồn tại",
    CLIENT_ALREADY_EXIST: "Khách hàng đã tồn tại",
    USER_OWNER_ALREADY_BELONG_OTHER_USER:"Tài khoản người dùng đã đăng ký bởi người khác",
    CAN_NOT_CALCULATE_STOCK_PRICE_ON_PAST:"Không thể tính giá kho vào khoảng thời gian đã chọn",
    USER_NOT_OWN_ANY_THIS_CLIENT:"Tài khoản không thuộc sở hữu bất kỳ công ty nào",
    ACCOUNT_LOCKED_BECAUSE_ENTERED_WRONG_INFORMATION_MANY_TIME:"Tài khoản hóa đơn điện tử đã bị khóa vì nhập sai thông tin tài khoản quá nhiều lần",
    INCORRECT_USERNAME_OR_PASSWORD:"Tên đăng nhập hoặc mật khẩu hóa đơn điện tử không chính xác"
  },
  {
    // eslint-disable-next-line no-unused-vars
    get(target, prop, receiver) {
      if (target[prop]) {
        return target[prop];
      }

      return prop;
    },
  }
);
