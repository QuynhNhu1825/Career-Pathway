import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Brain,
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-amber-500" />
              <h3 className="text-2xl font-bold text-white">
                Career Pathway
              </h3>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Hệ thống AI chuyên gia giúp bạn định hướng nghề nghiệp khoa học,
              loại bỏ việc chọn ngành theo cảm tính.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Liên kết nhanh
            </h4>

            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Trang chủ
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-amber-400 transition-colors">
                  Tính năng
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-amber-400 transition-colors"
                >
                  Quy trình
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="hover:text-amber-400 transition-colors"
                >
                  Đánh giá
                </a>
              </li>
            </ul>
          </div>

          {/* Assessment Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Hệ thống đánh giá
            </h4>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Chế độ Targeted
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Chế độ Discovery
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Mô hình RIASEC
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Chatbox AI
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liên hệ</h4>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-amber-400" />
                <span>
                  Trường Cao đẳng Kỹ thuật Cao Thắng
                  <br />
                  TP. Hồ Chí Minh
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-amber-400" />
                <span>0123 456 789</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-amber-400" />
                <span>contact@careerpathway.vn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Career Pathway. Powered by Gemini AI & O*NET Database.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Chính sách bảo mật
              </a>

              <a href="#" className="hover:text-amber-400 transition-colors">
                Điều khoản sử dụng
              </a>

              <a href="#" className="hover:text-amber-400 transition-colors">
                Tài liệu API
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;