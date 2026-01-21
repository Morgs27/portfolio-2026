import { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { gsap } from 'gsap';
import { X, Download, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import resumePdf from '../../assets/resume.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './ResumeModal.scss';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RESUME_DESCRIPTION = "Updated 2024";

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageWidth, setPageWidth] = useState(600);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    // Calculate page width based on container
    useEffect(() => {
        const updateWidth = () => {
            const maxWidth = Math.min(window.innerWidth * 0.85 - 48, 800);
            setPageWidth(maxWidth);
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setPageNumber(1);

            gsap.fromTo(overlayRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: 'power2.out' }
            );
            gsap.fromTo(contentRef.current,
                { opacity: 0, scale: 0.95, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.1 }
            );
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleClose = () => {
        gsap.to(contentRef.current, {
            opacity: 0,
            scale: 0.95,
            y: 20,
            duration: 0.2,
            ease: 'power2.in'
        });
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.25,
            ease: 'power2.in',
            onComplete: onClose
        });
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === overlayRef.current) {
            handleClose();
        }
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
    const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages));

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            className="resume-modal__overlay"
            onClick={handleOverlayClick}
        >
            <div ref={contentRef} className="resume-modal">
                <div className="resume-modal__header">
                    <div className="resume-modal__header-content">
                        <h3 className="resume-modal__title">Resume</h3>
                        <p className="resume-modal__description">{RESUME_DESCRIPTION}</p>
                    </div>
                    <div className="resume-modal__actions">
                        <a
                            href={resumePdf}
                            download="Morgan_Daniel_Resume.pdf"
                            className="resume-modal__action"
                            aria-label="Download resume"
                        >
                            <Download size={18} />
                        </a>
                        <a
                            href={resumePdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-modal__action"
                            aria-label="Open in new tab"
                        >
                            <ExternalLink size={18} />
                        </a>
                        <button
                            onClick={handleClose}
                            className="resume-modal__action resume-modal__action--close"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                <div className="resume-modal__content">
                    <Document
                        file={resumePdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={
                            <div className="resume-modal__loading">
                                <div className="resume-modal__spinner" />
                            </div>
                        }
                        className="resume-modal__document"
                    >
                        <Page
                            pageNumber={pageNumber}
                            width={pageWidth}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                            className="resume-modal__page"
                        />
                    </Document>
                </div>

                {numPages > 1 && (
                    <div className="resume-modal__pagination">
                        <button
                            onClick={goToPrevPage}
                            disabled={pageNumber <= 1}
                            className="resume-modal__page-btn"
                            aria-label="Previous page"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <span className="resume-modal__page-info">
                            {pageNumber} / {numPages}
                        </span>
                        <button
                            onClick={goToNextPage}
                            disabled={pageNumber >= numPages}
                            className="resume-modal__page-btn"
                            aria-label="Next page"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResumeModal;
