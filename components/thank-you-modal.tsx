import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
        <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
        <p className="text-gray-600 mb-6">
          We appreciate you taking the time to share your experience with us. Your feedback helps us improve our services.
        </p>
        <Button 
          onClick={onClose}
          className="bg-primary text-white hover:bg-primary/90 w-full"
        >
          Close
        </Button>
      </div>
    </div>
  )
} 