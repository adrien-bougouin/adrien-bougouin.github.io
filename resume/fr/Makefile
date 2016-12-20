################################################################################
# Makefile
################################################################################

cv_NAME	= resume
bib_FILE		= ../publication_fr.bib
needed_FILES	=  $(bib_FILE)

default: $(cv_NAME).pdf

$(cv_NAME).pdf: $(cv_NAME).tex $(needed_FILES)
	pdflatex $(cv_NAME).tex
	bibtex $(cv_NAME)
	pdflatex $(cv_NAME).tex
	pdflatex $(cv_NAME).tex

################################################################################

.PHONY: clean mrproper

clean:
	rm -rf *.aux *.bbl *.blg *.log *.out *.toc *.ps *.dvi

mrproper: clean
	rm $(cv_NAME).pdf

